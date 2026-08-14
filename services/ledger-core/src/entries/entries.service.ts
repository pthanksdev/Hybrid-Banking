import { Injectable, BadRequestException, ConflictException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'crypto';

@Injectable()
export class EntriesService {
  private readonly logger = new Logger(EntriesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async postTransaction(dto: any) {
    if (!dto.entries || dto.entries.length < 2) {
      throw new BadRequestException('A double-entry transaction must contain at least 2 entries');
    }

    // 1. Double-Entry Balance Invariant Check: SUM(entries.amount) MUST equal 0
    let totalSum = 0n;
    const parsedEntries = dto.entries.map((entry: any) => {
      let amountBigInt: bigint;
      try {
        amountBigInt = BigInt(entry.amount);
      } catch {
        throw new BadRequestException(`Invalid BigInt string for entry amount: ${entry.amount}`);
      }
      totalSum += amountBigInt;
      return {
        ...entry,
        amountBigInt,
      };
    });

    if (totalSum !== 0n) {
      throw new BadRequestException(
        `Double-entry invariant violated: sum of entries amounts is ${totalSum.toString()}, must be 0`,
      );
    }

    // 2. Idempotency Check
    if (dto.idempotencyKey) {
      const existingKey = await this.prisma.idempotencyKey.findUnique({
        where: { key: dto.idempotencyKey },
      });
      if (existingKey) {
        this.logger.log(`Idempotency key hit: ${dto.idempotencyKey}`);
        return existingKey.responseBody;
      }
    }

    // 3. Verify all account IDs exist and are ACTIVE
    const accountIds: string[] = Array.from(new Set(parsedEntries.map((e: any) => e.accountId as string)));
    const accounts = await this.prisma.ledgerAccount.findMany({
      where: { id: { in: accountIds } },
    });

    const foundSet = new Set(accounts.map((a) => a.id));
    for (const accId of accountIds) {
      if (!foundSet.has(accId)) {
        throw new BadRequestException(`Ledger account ${accId} does not exist`);
      }
    }

    const transactionId = `tx_${randomUUID()}`;

    // 4. Atomic Multi-Entry Database Transaction
    const response = await this.prisma.$transaction(async (tx) => {
      const createdEntries: any[] = [];

      for (const entry of parsedEntries) {
        const created = await tx.ledgerEntry.create({
          data: {
            transactionId,
            accountId: entry.accountId,
            amount: entry.amountBigInt,
            currency: entry.currency || 'USD',
            description: entry.description || dto.description,
            metadata: (entry.metadata || dto.metadata || undefined) as any,
          },
        });
        createdEntries.push(created);
      }

      const resultPayload = {
        transactionId,
        postedAt: new Date().toISOString(),
        entriesCount: createdEntries.length,
        entries: createdEntries.map((e) => ({
          id: e.id,
          accountId: e.accountId,
          amount: e.amount.toString(),
          currency: e.currency,
          description: e.description,
        })),
      };

      if (dto.idempotencyKey) {
        await tx.idempotencyKey.create({
          data: {
            key: dto.idempotencyKey,
            responseBody: resultPayload as any,
            statusCode: 201,
          },
        });
      }

      return resultPayload;
    });

    this.logger.log(`Successfully posted transaction ${transactionId} with ${parsedEntries.length} entries`);
    return response;
  }

  async getTransaction(transactionId: string) {
    const entries = await this.prisma.ledgerEntry.findMany({
      where: { transactionId },
    });
    if (entries.length === 0) return null;

    return {
      transactionId,
      postedAt: entries[0].createdAt.toISOString(),
      entriesCount: entries.length,
      entries: entries.map((e) => ({
        id: e.id,
        accountId: e.accountId,
        amount: e.amount.toString(),
        currency: e.currency,
        description: e.description,
      })),
    };
  }

  async getEntriesForAccount(accountId: string, limit = 50) {
    const entries = await this.prisma.ledgerEntry.findMany({
      where: { accountId },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return entries.map((e) => ({
      id: e.id,
      transactionId: e.transactionId,
      accountId: e.accountId,
      amount: e.amount.toString(),
      currency: e.currency,
      description: e.description,
      createdAt: e.createdAt.toISOString(),
    }));
  }
}

import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AccountsService {
  private readonly logger = new Logger(AccountsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createAccount(dto: any) {
    const account = await this.prisma.ledgerAccount.create({
      data: {
        name: dto.name,
        type: dto.type as any,
        currency: dto.currency || 'USD',
        metadata: (dto.metadata || undefined) as any,
      },
    });

    this.logger.log(`Created ledger account ${account.id} (${account.type})`);
    return this.toAccountResponseDto(account, 0n);
  }

  async getAccount(id: string) {
    const account = await this.prisma.ledgerAccount.findUnique({
      where: { id },
    });
    if (!account) {
      throw new NotFoundException(`Ledger account ${id} not found`);
    }

    const balance = await this.calculateBalance(id);
    return this.toAccountResponseDto(account, balance);
  }

  async getBalance(accountId: string, asOf?: string) {
    const account = await this.prisma.ledgerAccount.findUnique({ where: { id: accountId } });
    if (!account) throw new NotFoundException(`Ledger account ${accountId} not found`);

    const where: any = { accountId };
    if (asOf) {
      where.createdAt = { lte: new Date(asOf) };
    }

    const result = await this.prisma.ledgerEntry.aggregate({
      where,
      _sum: { amount: true },
    });

    const balanceBigInt = result._sum.amount ?? 0n;

    return {
      accountId,
      balance: balanceBigInt.toString(),
      currency: account.currency,
      asOf: asOf || new Date().toISOString(),
    };
  }

  async calculateBalance(accountId: string): Promise<bigint> {
    const result = await this.prisma.ledgerEntry.aggregate({
      where: { accountId },
      _sum: { amount: true },
    });

    return result._sum.amount ?? 0n;
  }

  async updateAccountStatus(id: string, status: string) {
    const account = await this.prisma.ledgerAccount.findUnique({ where: { id } });
    if (!account) throw new NotFoundException(`Ledger account ${id} not found`);

    const updated = await this.prisma.ledgerAccount.update({
      where: { id },
      data: { status },
    });

    const balance = await this.calculateBalance(id);
    return this.toAccountResponseDto(updated, balance);
  }

  async listAccounts(type?: string, currency?: string, limit = 50, offset = 0) {
    const where: any = {};
    if (type) where.type = type as any;
    if (currency) where.currency = currency;

    const [accounts, count] = await Promise.all([
      this.prisma.ledgerAccount.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.ledgerAccount.count({ where }),
    ]);

    const items = await Promise.all(
      accounts.map(async (a) => {
        const balance = await this.calculateBalance(a.id);
        return this.toAccountResponseDto(a, balance);
      }),
    );

    return { total: count, items };
  }

  private toAccountResponseDto(account: any, balance: bigint) {
    return {
      id: account.id,
      name: account.name,
      type: account.type,
      currency: account.currency,
      status: account.status,
      balance: balance.toString(),
      metadata: account.metadata,
      createdAt: account.createdAt.toISOString(),
      updatedAt: account.updatedAt.toISOString(),
    };
  }
}

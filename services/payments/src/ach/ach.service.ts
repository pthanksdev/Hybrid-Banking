import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerClient } from '@hybrid-banking/ledger-client';
import { randomUUID } from 'crypto';

@Injectable()
export class AchService {
  private readonly logger = new Logger(AchService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledgerClient: LedgerClient,
  ) {}

  async initiateAchTransfer(dto: {
    userId: string;
    userLedgerAccountId: string;
    routingNumber: string;
    accountNumber: string;
    amount: string;
    direction: 'INBOUND' | 'OUTBOUND';
  }) {
    const processorRef = `ach_sec_${randomUUID().substring(0, 8)}`;

    const tx = await this.prisma.paymentTransaction.create({
      data: {
        userId: dto.userId,
        type: 'ACH',
        direction: dto.direction,
        amount: BigInt(dto.amount),
        currency: 'USD',
        status: 'PENDING',
        processorRef,
        sourceAccount: dto.direction === 'OUTBOUND' ? dto.userLedgerAccountId : null,
        destAccount: dto.direction === 'INBOUND' ? dto.userLedgerAccountId : null,
        metadata: { routingNumber: dto.routingNumber },
      },
    });

    this.logger.log(`Initiated ACH ${dto.direction} transfer ${tx.id}`);
    return {
      paymentId: tx.id,
      status: 'PENDING',
      processorRef,
      estimatedSettlementDays: 2,
    };
  }
}

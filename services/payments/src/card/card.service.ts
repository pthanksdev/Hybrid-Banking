import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerClient } from '@hybrid-banking/ledger-client';
import { ProcessCardPaymentDto } from './card-payment.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CardService {
  private readonly logger = new Logger(CardService.name);
  private readonly merchantClearingAccountId = 'ledger-merchant-clearing-usd';

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledgerClient: LedgerClient,
  ) {}

  async processCardDeposit(dto: ProcessCardPaymentDto) {
    const processorRef = `card_ch_${randomUUID().substring(0, 8)}`;

    const tx = await this.prisma.paymentTransaction.create({
      data: {
        userId: dto.userId,
        type: 'CARD',
        direction: 'INBOUND',
        amount: BigInt(dto.amount),
        currency: dto.currency,
        status: 'PENDING',
        processorRef,
        destAccount: dto.userLedgerAccountId,
      },
    });

    try {
      // Post double-entry to ledger-core:
      // Debit: Merchant Clearing (Asset) +amount
      // Credit: User Bank Account (Liability) -amount
      const ledgerTx = await this.ledgerClient.postTransaction({
        idempotencyKey: `card-dep-${tx.id}`,
        entries: [
          {
            accountId: dto.userLedgerAccountId,
            amount: dto.amount, // Credit liability (+user balance)
            currency: dto.currency,
            description: `Card deposit ref ${processorRef}`,
          },
          {
            accountId: this.merchantClearingAccountId,
            amount: (-BigInt(dto.amount)).toString(), // Debit asset
            currency: dto.currency,
            description: `Card clearing ref ${processorRef}`,
          },
        ],
        description: `Card deposit $${(Number(dto.amount)/100).toFixed(2)}`,
      });

      const updated = await this.prisma.paymentTransaction.update({
        where: { id: tx.id },
        data: {
          status: 'COMPLETED',
          ledgerTxId: ledgerTx.id,
        },
      });

      this.logger.log(`Card deposit ${tx.id} completed via ledger tx ${ledgerTx.id}`);
      return {
        paymentId: updated.id,
        status: updated.status,
        amount: updated.amount.toString(),
        currency: updated.currency,
        processorRef,
        ledgerTxId: ledgerTx.id,
      };
    } catch (err: any) {
      this.logger.error(`Card payment failed: ${err.message}`);
      await this.prisma.paymentTransaction.update({
        where: { id: tx.id },
        data: { status: 'FAILED' },
      });
      return { paymentId: tx.id, status: 'FAILED', error: err.message };
    }
  }
}

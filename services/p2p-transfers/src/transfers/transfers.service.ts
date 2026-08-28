import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerClient } from '@hybrid-banking/ledger-client';
import { SendP2pTransferDto } from './dto/transfer.dto';

@Injectable()
export class TransfersService {
  private readonly logger = new Logger(TransfersService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledgerClient: LedgerClient,
  ) {}

  async sendTransfer(dto: SendP2pTransferDto) {
    const amountBigInt = BigInt(dto.amount);
    if (amountBigInt <= 0n) {
      throw new BadRequestException('Transfer amount must be greater than zero');
    }

    // 1. Check sender balance from ledger-core
    try {
      const bal = await this.ledgerClient.getBalance(dto.senderLedgerAcc);
      if (BigInt(bal.balance) < amountBigInt) {
        throw new BadRequestException(`Insufficient funds. Available: ${bal.balance}, required: ${dto.amount}`);
      }
    } catch (err: any) {
      if (err instanceof BadRequestException) throw err;
      this.logger.warn(`Could not verify sender balance online: ${err.message}`);
    }

    const transferRecord = await this.prisma.p2pTransfer.create({
      data: {
        senderUserId: dto.senderUserId,
        recipientUserId: dto.recipientUserId,
        senderLedgerAcc: dto.senderLedgerAcc,
        recipLedgerAcc: dto.recipLedgerAcc,
        amount: amountBigInt,
        currency: dto.currency,
        note: dto.note,
        status: 'PENDING',
      },
    });

    try {
      // 2. Post atomic double-entry to ledger-core:
      // Debit: Sender Liability (-amount) -> Debit lowers liability
      // Credit: Recipient Liability (+amount) -> Credit increases liability
      const ledgerTx = await this.ledgerClient.postTransaction({
        idempotencyKey: dto.idempotencyKey,
        entries: [
          {
            accountId: dto.senderLedgerAcc,
            amount: (-amountBigInt).toString(), // Debit sender
            currency: dto.currency,
            description: `P2P transfer to ${dto.recipientUserId}`,
          },
          {
            accountId: dto.recipLedgerAcc,
            amount: amountBigInt.toString(), // Credit recipient
            currency: dto.currency,
            description: `P2P transfer from ${dto.senderUserId}`,
          },
        ],
        description: dto.note || `P2P transfer`,
      });

      const updated = await this.prisma.p2pTransfer.update({
        where: { id: transferRecord.id },
        data: {
          status: 'COMPLETED',
          ledgerTxId: ledgerTx.id,
        },
      });

      this.logger.log(`P2P transfer ${updated.id} completed. Ledger Tx: ${ledgerTx.id}`);
      return {
        transferId: updated.id,
        status: updated.status,
        amount: updated.amount.toString(),
        currency: updated.currency,
        ledgerTxId: ledgerTx.id,
        createdAt: updated.createdAt.toISOString(),
      };
    } catch (err: any) {
      this.logger.error(`P2P transfer failed: ${err.message}`);
      await this.prisma.p2pTransfer.update({
        where: { id: transferRecord.id },
        data: { status: 'FAILED' },
      });
      throw new BadRequestException(`Transfer failed: ${err.message}`);
    }
  }

  async getTransferHistory(userId: string) {
    const transfers = await this.prisma.p2pTransfer.findMany({
      where: {
        OR: [{ senderUserId: userId }, { recipientUserId: userId }],
      },
      orderBy: { createdAt: 'desc' },
    });

    return transfers.map((t) => ({
      id: t.id,
      type: t.senderUserId === userId ? 'SENT' : 'RECEIVED',
      senderUserId: t.senderUserId,
      recipientUserId: t.recipientUserId,
      amount: t.amount.toString(),
      currency: t.currency,
      note: t.note,
      status: t.status,
      createdAt: t.createdAt.toISOString(),
    }));
  }
}

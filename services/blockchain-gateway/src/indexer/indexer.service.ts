import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerClient } from '@hybrid-banking/ledger-client';

@Injectable()
export class IndexerService {
  private readonly logger = new Logger(IndexerService.name);
  private readonly hotWalletLedgerAcc = 'ledger-hot-wallet-eth';

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledgerClient: LedgerClient,
  ) {}

  /**
   * Process a confirmed on-chain deposit detected by indexer or webhook.
   */
  async processDeposit(dto: {
    chain: string;
    txHash: string;
    blockNumber: string;
    fromAddress: string;
    toAddress: string;
    userLedgerAccountId: string;
    amount: string; // BigInt as string e.g. 1000000000000000000 wei
    tokenAddress?: string;
  }) {
    const existing = await this.prisma.onChainDeposit.findUnique({
      where: { txHash: dto.txHash },
    });

    if (existing && existing.status === 'PROCESSED') {
      return { status: 'ALREADY_PROCESSED', depositId: existing.id };
    }

    const deposit = existing || await this.prisma.onChainDeposit.create({
      data: {
        chain: dto.chain,
        txHash: dto.txHash,
        blockNumber: BigInt(dto.blockNumber),
        fromAddress: dto.fromAddress,
        toAddress: dto.toAddress,
        amount: BigInt(dto.amount),
        tokenAddress: dto.tokenAddress,
        status: 'CONFIRMED',
      },
    });

    try {
      // Record double-entry on ledger-core:
      // Debit: Platform Hot Wallet Asset (+amount)
      // Credit: Customer Crypto Wallet Liability (+amount)
      const ledgerTx = await this.ledgerClient.postTransaction({
        idempotencyKey: `chain-dep-${dto.txHash}`,
        entries: [
          {
            accountId: dto.userLedgerAccountId,
            amount: dto.amount, // Credit liability
            currency: dto.chain,
            description: `On-chain deposit ${dto.txHash}`,
          },
          {
            accountId: this.hotWalletLedgerAcc,
            amount: (-BigInt(dto.amount)).toString(), // Debit asset
            currency: dto.chain,
            description: `On-chain deposit hot wallet credit ${dto.txHash}`,
          },
        ],
        description: `On-chain ${dto.chain} deposit`,
      });

      const updated = await this.prisma.onChainDeposit.update({
        where: { id: deposit.id },
        data: {
          status: 'PROCESSED',
          ledgerTxId: ledgerTx.id,
        },
      });

      this.logger.log(`On-chain deposit ${dto.txHash} processed into ledger ${ledgerTx.id}`);
      return {
        depositId: updated.id,
        status: updated.status,
        ledgerTxId: ledgerTx.id,
      };
    } catch (err: any) {
      this.logger.error(`Failed to record on-chain deposit: ${err.message}`);
      throw err;
    }
  }

  async getDepositStatus(txHash: string) {
    const dep = await this.prisma.onChainDeposit.findUnique({ where: { txHash } });
    if (!dep) return null;
    return {
      id: dep.id,
      txHash: dep.txHash,
      chain: dep.chain,
      amount: dep.amount.toString(),
      status: dep.status,
      ledgerTxId: dep.ledgerTxId,
      createdAt: dep.createdAt.toISOString(),
    };
  }
}

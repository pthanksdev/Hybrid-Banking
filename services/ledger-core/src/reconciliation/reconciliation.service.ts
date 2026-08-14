import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReconciliationService {
  private readonly logger = new Logger(ReconciliationService.name);

  constructor(private readonly prisma: PrismaService) {}

  async runReconciliation() {
    this.logger.log('Starting global ledger zero-sum reconciliation check...');

    // Group all entries by transactionId and verify sum === 0
    const transactions = await this.prisma.ledgerEntry.groupBy({
      by: ['transactionId'],
      _sum: { amount: true },
    });

    const imbalancedTransactions = transactions
      .filter((t) => (t._sum.amount ?? 0n) !== 0n)
      .map((t) => ({
        transactionId: t.transactionId,
        imbalance: (t._sum.amount ?? 0n).toString(),
      }));

    const [totalEntries, totalAccounts] = await Promise.all([
      this.prisma.ledgerEntry.count(),
      this.prisma.ledgerAccount.count(),
    ]);

    const isBalanced = imbalancedTransactions.length === 0;

    this.logger.log(
      `Reconciliation complete. Status: ${isBalanced ? 'BALANCED' : 'IMBALANCED'}. Total entries: ${totalEntries}, Imbalanced: ${imbalancedTransactions.length}`,
    );

    return {
      status: isBalanced ? 'HEALTHY' : 'CORRUPTED',
      isBalanced,
      totalAccounts,
      totalEntries,
      imbalancedTransactionsCount: imbalancedTransactions.length,
      imbalancedTransactions,
      reconciledAt: new Date().toISOString(),
    };
  }

  async cleanupIdempotencyKeys() {
    const result = await this.prisma.idempotencyKey.deleteMany();
    return { clearedKeysCount: result.count };
  }
}

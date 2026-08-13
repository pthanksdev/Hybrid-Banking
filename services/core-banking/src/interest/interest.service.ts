import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerClient } from '@hybrid-banking/ledger-client';

@Injectable()
export class InterestService {
  private readonly logger = new Logger(InterestService.name);
  private readonly interestExpenseLedgerAcc = 'ledger-interest-expense-usd';

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledgerClient: LedgerClient,
  ) {}

  async calculateDailyInterest() {
    this.logger.log('Starting daily interest accrual calculation...');

    const savingsAccounts = await this.prisma.bankAccount.findMany({
      where: { accountType: 'SAVINGS', status: 'ACTIVE' },
    });

    let totalAccruedCount = 0;

    for (const acc of savingsAccounts) {
      try {
        const balObj = await this.ledgerClient.getBalance(acc.ledgerAccountId);
        const currentBalance = BigInt(balObj.balance);

        if (currentBalance <= 0n) continue;

        // Daily interest = (Balance * BPS) / (10,000 * 365)
        const dailyInterest = (currentBalance * BigInt(acc.interestRateBps)) / (10000n * 365n);

        if (dailyInterest > 0n) {
          // Credit user ledger account (+dailyInterest)
          // Debit interest expense account (-dailyInterest)
          await this.ledgerClient.postTransaction({
            idempotencyKey: `interest-${acc.id}-${new Date().toISOString().substring(0, 10)}`,
            entries: [
              {
                accountId: acc.ledgerAccountId,
                amount: dailyInterest.toString(),
                currency: acc.currency,
                description: `Daily savings interest accrual (${acc.interestRateBps} bps)`,
              },
              {
                accountId: this.interestExpenseLedgerAcc,
                amount: (-dailyInterest).toString(),
                currency: acc.currency,
                description: `Interest expense payout for ${acc.accountNumber}`,
              },
            ],
            description: `Daily interest payout for ${acc.accountNumber}`,
          });

          totalAccruedCount++;
        }
      } catch (err: any) {
        this.logger.error(`Failed interest accrual for account ${acc.id}: ${err.message}`);
      }
    }

    this.logger.log(`Completed interest accrual. Processed ${totalAccruedCount} accounts.`);
    return { processedAccountsCount: totalAccruedCount, status: 'COMPLETED' };
  }

  async processDailyInterestAccrual() {
    return this.calculateDailyInterest();
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerClient } from '@hybrid-banking/ledger-client';

@Injectable()
export class ReconciliationService {
  private readonly logger = new Logger(ReconciliationService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledgerClient: LedgerClient,
  ) {}

  async reconcileDailyProcessorReport(reportDate: string) {
    this.logger.log(`Starting daily payment reconciliation for date: ${reportDate}`);

    const payments = await this.prisma.paymentTransaction.findMany({
      where: {
        createdAt: {
          gte: new Date(`${reportDate}T00:00:00.000Z`),
          lte: new Date(`${reportDate}T23:59:59.999Z`),
        },
      },
    });

    let matchedCount = 0;
    let mismatchedCount = 0;

    for (const payment of payments) {
      if (payment.status === 'SETTLED') {
        matchedCount++;
      } else if (payment.status === 'FAILED') {
        mismatchedCount++;
      }
    }

    this.logger.log(`Reconciliation report ${reportDate}: ${matchedCount} matched, ${mismatchedCount} mismatched/failed.`);

    return {
      reportDate,
      totalPayments: payments.length,
      matchedCount,
      mismatchedCount,
      status: mismatchedCount === 0 ? 'BALANCED' : 'DISCREPANCY_DETECTED',
    };
  }
}

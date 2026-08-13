import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerClient } from '@hybrid-banking/ledger-client';

@Injectable()
export class StatementsService {
  private readonly logger = new Logger(StatementsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledgerClient: LedgerClient,
  ) {}

  async generateStatement(accountId: string, startDate?: string, endDate?: string) {
    const account = await this.prisma.bankAccount.findUnique({ where: { id: accountId } });
    if (!account) throw new NotFoundException(`Bank account ${accountId} not found`);

    let entries: any[] = [];
    try {
      const res = await this.ledgerClient.getEntries(account.ledgerAccountId, startDate, endDate, 100, 0);
      entries = Array.isArray(res) ? res : (res as any).entries || [];
    } catch (err: any) {
      this.logger.warn(`Failed to fetch ledger entries for statement: ${err.message}`);
    }

    const startingBalance = 0n;
    let runningBalance = startingBalance;

    const statementLines = entries.map((entry) => {
      const amt = BigInt(entry.amount || '0');
      runningBalance += amt;
      return {
        id: entry.id,
        transactionId: entry.transactionId,
        amount: entry.amount,
        currency: entry.currency,
        description: entry.description,
        runningBalance: runningBalance.toString(),
        createdAt: entry.createdAt,
      };
    });

    return {
      accountId: account.id,
      accountNumber: account.accountNumber,
      currency: account.currency,
      closingBalance: runningBalance.toString(),
      totalEntries: statementLines.length,
      lines: statementLines,
      generatedAt: new Date().toISOString(),
    };
  }
}

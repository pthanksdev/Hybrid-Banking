import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerClient } from '@hybrid-banking/ledger-client';
import { CreateBankAccountDto } from './dto/account.dto';
import { randomBytes } from 'crypto';

@Injectable()
export class AccountsService {
  private readonly logger = new Logger(AccountsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledgerClient: LedgerClient,
  ) {}

  async createAccount(dto: CreateBankAccountDto) {
    const accountNumber = `ACT-${Date.now()}-${randomBytes(3).toString('hex').toUpperCase()}`;
    const accountType = dto.type || (dto as any).accountType || 'CHECKING';

    // 1. Register corresponding asset/liability account in ledger-core
    let ledgerAccountId: string;
    try {
      const ledgerAcc = await this.ledgerClient.createAccount({
        name: `Bank ${accountType} - ${accountNumber}`,
        type: 'LIABILITY', // Customer deposit accounts are liabilities to the bank
        currency: dto.currency || 'USD',
        metadata: { userId: dto.userId, accountNumber },
      });
      ledgerAccountId = ledgerAcc.id;
    } catch (err: any) {
      this.logger.warn(`Ledger account creation fallback: ${err.message}`);
      ledgerAccountId = `ledger-stub-${accountNumber}`;
    }

    // 2. Persist local BankAccount record (without storing balance!)
    const account = await this.prisma.bankAccount.create({
      data: {
        userId: dto.userId,
        accountNumber,
        accountType: String(accountType),
        currency: dto.currency || 'USD',
        status: 'ACTIVE',
        ledgerAccountId,
        interestRateBps: String(accountType) === 'SAVINGS' ? 450 : 0, // 4.5% APY
      },
    });

    this.logger.log(`Created bank account ${account.accountNumber} linked to ledger ${ledgerAccountId}`);
    return this.toResponseDto(account, '0');
  }

  async getAccount(accountId: string) {
    const account = await this.prisma.bankAccount.findUnique({ where: { id: accountId } });
    if (!account) throw new NotFoundException(`Bank account ${accountId} not found`);

    // Fetch dynamic real-time balance from ledger-core
    let balance = '0';
    try {
      const ledgerBal = await this.ledgerClient.getBalance(account.ledgerAccountId);
      balance = ledgerBal.balance;
    } catch (err: any) {
      this.logger.warn(`Failed to fetch ledger balance for ${accountId}: ${err.message}`);
    }

    return this.toResponseDto(account, balance);
  }

  async getUserAccounts(userId: string) {
    const accounts = await this.prisma.bankAccount.findMany({ where: { userId } });

    return Promise.all(
      accounts.map(async (acc) => {
        let balance = '0';
        try {
          const ledgerBal = await this.ledgerClient.getBalance(acc.ledgerAccountId);
          balance = ledgerBal.balance;
        } catch {}
        return this.toResponseDto(acc, balance);
      }),
    );
  }

  async freezeAccount(accountId: string, dto?: any) {
    const account = await this.prisma.bankAccount.findUnique({ where: { id: accountId } });
    if (!account) throw new NotFoundException(`Bank account ${accountId} not found`);

    const updated = await this.prisma.bankAccount.update({
      where: { id: accountId },
      data: { status: 'FROZEN' },
    });

    this.logger.log(`Frozen account ${accountId}. Reason: ${dto?.reason || 'N/A'}`);
    return this.toResponseDto(updated, '0');
  }

  async unfreezeAccount(accountId: string) {
    const account = await this.prisma.bankAccount.findUnique({ where: { id: accountId } });
    if (!account) throw new NotFoundException(`Bank account ${accountId} not found`);

    const updated = await this.prisma.bankAccount.update({
      where: { id: accountId },
      data: { status: 'ACTIVE' },
    });

    this.logger.log(`Unfrozen account ${accountId}`);
    return this.toResponseDto(updated, '0');
  }

  private toResponseDto(account: any, balance: string) {
    return {
      id: account.id,
      userId: account.userId,
      accountNumber: account.accountNumber,
      accountType: account.accountType,
      currency: account.currency,
      status: account.status,
      balance,
      interestRateBps: account.interestRateBps,
      ledgerAccountId: account.ledgerAccountId,
      createdAt: account.createdAt.toISOString(),
    };
  }
}

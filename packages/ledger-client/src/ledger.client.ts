import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export interface PostTransactionRequest {
  idempotencyKey: string;
  entries: Array<{
    accountId: string;
    amount: string; // BigInt as string over HTTP
    currency: string;
    description?: string;
    metadata?: Record<string, unknown>;
  }>;
  description?: string;
  metadata?: Record<string, unknown>;
}

export interface LedgerAccountResponse {
  id: string;
  name: string;
  type: string;
  currency: string;
  createdAt: string;
}

export interface BalanceResponse {
  accountId: string;
  balance: string; // BigInt as string
  currency: string;
  asOf: string;
}

export interface TransactionResponse {
  id: string;
  entries: Array<{
    id: string;
    accountId: string;
    amount: string;
    currency: string;
    description?: string;
  }>;
  createdAt: string;
}

@Injectable()
export class LedgerClient {
  private readonly logger = new Logger(LedgerClient.name);

  constructor(private readonly httpService: HttpService) {}

  /**
   * Post a balanced set of double-entry ledger entries.
   */
  async postTransaction(request: PostTransactionRequest): Promise<TransactionResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post<TransactionResponse>('/entries', request),
      );
      return data;
    } catch (error: any) {
      this.logger.error(`Failed to post transaction: ${error.message}`);
      throw new HttpException(
        error.response?.data?.message || 'Ledger service unavailable',
        error.response?.status || HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  /**
   * Get balance for a ledger account.
   */
  async getBalance(accountId: string, asOf?: string): Promise<BalanceResponse> {
    try {
      const params: Record<string, string> = {};
      if (asOf) params.asOf = asOf;

      const { data } = await firstValueFrom(
        this.httpService.get<BalanceResponse>(`/accounts/${accountId}/balance`, { params }),
      );
      return data;
    } catch (error: any) {
      this.logger.error(`Failed to get balance for ${accountId}: ${error.message}`);
      throw new HttpException(
        error.response?.data?.message || 'Ledger service unavailable',
        error.response?.status || HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  /**
   * Create a new ledger account.
   */
  async createAccount(request: {
    name: string;
    type: string;
    currency: string;
    metadata?: Record<string, unknown>;
  }): Promise<LedgerAccountResponse> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post<LedgerAccountResponse>('/accounts', request),
      );
      return data;
    } catch (error: any) {
      this.logger.error(`Failed to create ledger account: ${error.message}`);
      throw new HttpException(
        error.response?.data?.message || 'Ledger service unavailable',
        error.response?.status || HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }

  /**
   * Get entries for an account (for statement generation).
   */
  async getEntries(
    accountId: string,
    from?: string,
    to?: string,
    limit: number = 100,
    offset: number = 0,
  ): Promise<{ entries: TransactionResponse[]; total: number }> {
    try {
      const params: Record<string, string | number> = { limit, offset };
      if (from) params.from = from;
      if (to) params.to = to;

      const { data } = await firstValueFrom(
        this.httpService.get(`/accounts/${accountId}/entries`, { params }),
      );
      return data;
    } catch (error: any) {
      this.logger.error(`Failed to get entries for ${accountId}: ${error.message}`);
      throw new HttpException(
        error.response?.data?.message || 'Ledger service unavailable',
        error.response?.status || HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}

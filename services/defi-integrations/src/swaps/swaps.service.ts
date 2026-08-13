import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { LedgerClient } from '@hybrid-banking/ledger-client';
import { ExecuteSwapDto } from './swap.dto';

@Injectable()
export class SwapsService {
  private readonly logger = new Logger(SwapsService.name);

  constructor(private readonly ledgerClient: LedgerClient) {}

  async executeSwap(dto: ExecuteSwapDto) {
    const fromAmt = BigInt(dto.fromAmount);
    const toAmt = BigInt(dto.expectedToAmount);

    if (fromAmt <= 0n || toAmt <= 0n) {
      throw new BadRequestException('Swap amounts must be greater than zero');
    }

    this.logger.log(`Executing DEX swap: ${dto.fromAmount} ${dto.fromToken} -> ${dto.expectedToAmount} ${dto.toToken}`);

    // Execute atomic balance swap in ledger-core:
    // Debit user source account (decrease fromToken balance)
    // Credit user destination account (increase toToken balance)
    try {
      const ledgerTx = await this.ledgerClient.postTransaction({
        idempotencyKey: dto.idempotencyKey,
        entries: [
          {
            accountId: dto.userSourceLedgerAcc,
            amount: (-fromAmt).toString(),
            currency: dto.fromToken,
            description: `DEX Swap out: ${dto.fromToken}`,
          },
          {
            accountId: dto.userDestLedgerAcc,
            amount: toAmt.toString(),
            currency: dto.toToken,
            description: `DEX Swap in: ${dto.toToken}`,
          },
        ],
        description: `DEX Swap ${dto.fromToken} -> ${dto.toToken}`,
      });

      return {
        status: 'COMPLETED',
        fromToken: dto.fromToken,
        fromAmount: dto.fromAmount,
        toToken: dto.toToken,
        toAmount: dto.expectedToAmount,
        ledgerTxId: ledgerTx.id,
        timestamp: new Date().toISOString(),
      };
    } catch (err: any) {
      this.logger.error(`Swap execution failed: ${err.message}`);
      throw new BadRequestException(`Swap failed: ${err.message}`);
    }
  }
}

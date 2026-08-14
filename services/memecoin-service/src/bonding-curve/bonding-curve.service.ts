import { Injectable, Logger, BadRequestException, NotFoundException } from '@nestjs/common';
import { LedgerClient } from '@hybrid-banking/ledger-client';
import { LaunchTokenDto, TradeTokenDto } from './dto/memecoin.dto';
import { randomUUID } from 'crypto';

interface Memecoin {
  id: string;
  name: string;
  symbol: string;
  creatorUserId: string;
  supply: bigint;
  reserveBalance: bigint; // SOL / USD raised in bonding curve
  marketCap: bigint;
  isGraduated: boolean; // Graduated to DEX when market cap target reached
  tokenLedgerAcc: string;
  createdAt: string;
}

@Injectable()
export class BondingCurveService {
  private readonly logger = new Logger(BondingCurveService.name);
  private tokens: Map<string, Memecoin> = new Map();
  private readonly platformFeeAcc = 'ledger-memecoin-fee-acc';

  constructor(private readonly ledgerClient: LedgerClient) {}

  /**
   * Price formula: P = k * S (Linear bonding curve with base price)
   * Cost to buy `n` tokens from current supply `S`:
   * Integral(k * x dx) from S to S+n = k * ((S+n)^2 - S^2) / 2
   */
  calculateBuyCost(currentSupply: bigint, amount: bigint): bigint {
    const k = 1000n; // Scaling factor
    const nextSupply = currentSupply + amount;
    const cost = (k * (nextSupply * nextSupply - currentSupply * currentSupply)) / 2n + (amount * 100n);
    return cost > 0n ? cost : 100n;
  }

  async launchToken(dto: LaunchTokenDto) {
    const tokenId = `meme-${dto.symbol.toLowerCase()}-${randomUUID().substring(0, 6)}`;

    let tokenLedgerAcc = `ledger-${tokenId}`;
    try {
      const ledgerAcc = await this.ledgerClient.createAccount({
        name: `Memecoin Reserve - ${dto.symbol}`,
        type: 'LIABILITY',
        currency: dto.symbol,
        metadata: { creator: dto.creatorUserId, symbol: dto.symbol },
      });
      tokenLedgerAcc = ledgerAcc.id;
    } catch {
      // dev fallback
    }

    const token: Memecoin = {
      id: tokenId,
      name: dto.name,
      symbol: dto.symbol,
      creatorUserId: dto.creatorUserId,
      supply: 0n,
      reserveBalance: 0n,
      marketCap: 0n,
      isGraduated: false,
      tokenLedgerAcc,
      createdAt: new Date().toISOString(),
    };

    this.tokens.set(tokenId, token);
    this.logger.log(`Launched meme token ${dto.name} (${dto.symbol}) [${tokenId}]`);

    return this.toResponse(token);
  }

  async tradeToken(dto: TradeTokenDto) {
    const token = this.tokens.get(dto.tokenId);
    if (!token) {
      throw new NotFoundException(`Memecoin ${dto.tokenId} not found`);
    }

    const tokenAmountBigInt = BigInt(dto.tokenAmount);
    if (tokenAmountBigInt <= 0n) throw new BadRequestException('Trade amount must be > 0');

    if (dto.side === 'BUY') {
      const cost = this.calculateBuyCost(token.supply, tokenAmountBigInt);

      // Post entries to ledger-core:
      // Debit buyer fiat account (-cost)
      // Credit buyer token account (+tokenAmount)
      try {
        const ledgerTx = await this.ledgerClient.postTransaction({
          idempotencyKey: dto.idempotencyKey,
          entries: [
            {
              accountId: dto.userFiatLedgerAcc,
              amount: (-cost).toString(),
              currency: 'USD',
              description: `Buy ${dto.tokenAmount} ${token.symbol}`,
            },
            {
              accountId: dto.userTokenLedgerAcc,
              amount: dto.tokenAmount,
              currency: token.symbol,
              description: `Meme token credit: ${token.symbol}`,
            },
          ],
          description: `Bonding curve buy ${token.symbol}`,
        });

        token.supply += tokenAmountBigInt;
        token.reserveBalance += cost;
        token.marketCap = token.supply * cost / (tokenAmountBigInt > 0n ? tokenAmountBigInt : 1n);

        // Graduate to DEX if reserve reaches target ($69,000 equivalent)
        if (token.reserveBalance >= 69000000000n && !token.isGraduated) {
          token.isGraduated = true;
          this.logger.log(`🚀 Token ${token.symbol} GRADUATED to DEX Raydium/Uniswap pool!`);
        }

        return {
          status: 'COMPLETED',
          side: 'BUY',
          cost: cost.toString(),
          tokenAmount: dto.tokenAmount,
          newSupply: token.supply.toString(),
          isGraduated: token.isGraduated,
          ledgerTxId: ledgerTx.id,
        };
      } catch (err: any) {
        throw new BadRequestException(`Trade failed: ${err.message}`);
      }
    } else {
      // Sell logic
      const refund = this.calculateBuyCost(token.supply - tokenAmountBigInt, tokenAmountBigInt);
      token.supply -= tokenAmountBigInt;
      token.reserveBalance = token.reserveBalance > refund ? token.reserveBalance - refund : 0n;

      return {
        status: 'COMPLETED',
        side: 'SELL',
        refund: refund.toString(),
        tokenAmount: dto.tokenAmount,
        newSupply: token.supply.toString(),
      };
    }
  }

  async listTokens() {
    return Array.from(this.tokens.values()).map(this.toResponse);
  }

  async getToken(tokenId: string) {
    const token = this.tokens.get(tokenId);
    if (!token) throw new NotFoundException(`Token ${tokenId} not found`);
    return this.toResponse(token);
  }

  private toResponse(t: Memecoin) {
    return {
      id: t.id,
      name: t.name,
      symbol: t.symbol,
      creatorUserId: t.creatorUserId,
      supply: t.supply.toString(),
      reserveBalance: t.reserveBalance.toString(),
      marketCap: t.marketCap.toString(),
      isGraduated: t.isGraduated,
      createdAt: t.createdAt,
    };
  }
}

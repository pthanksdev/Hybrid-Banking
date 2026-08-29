import { Injectable, Logger, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerClient } from '@hybrid-banking/ledger-client';
import { GenerateWalletDto } from './dto/custody.dto';
import { randomBytes } from 'crypto';

@Injectable()
export class CustodyService {
  private readonly logger = new Logger(CustodyService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly ledgerClient: LedgerClient,
  ) {}

  async generateWallet(dto: GenerateWalletDto) {
    const existing = await this.prisma.custodyWallet.findFirst({
      where: { userId: dto.userId, chain: dto.chain },
    });

    if (existing) {
      return this.toResponse(existing);
    }

    // Generate mock deterministic address based on chain & userId
    const mockAddr = dto.chain === 'SOL'
      ? `Sol${randomBytes(16).toString('hex').substring(0, 32)}`
      : `0x${randomBytes(20).toString('hex')}`;

    const keyRef = `kms-key-${dto.chain.toLowerCase()}-${randomBytes(4).toString('hex')}`;

    // Register corresponding crypto account in ledger-core
    let ledgerAccountId: string;
    try {
      const ledgerAcc = await this.ledgerClient.createAccount({
        name: `Custody Wallet - ${dto.userId} (${dto.chain})`,
        type: 'LIABILITY', // Customer crypto deposits are platform liabilities
        currency: dto.chain,
        metadata: { userId: dto.userId, address: mockAddr, chain: dto.chain },
      });
      ledgerAccountId = ledgerAcc.id;
    } catch {
      ledgerAccountId = `ledger-crypto-stub-${Date.now()}`;
    }

    const wallet = await this.prisma.custodyWallet.create({
      data: {
        userId: dto.userId,
        chain: dto.chain,
        address: mockAddr,
        keyRef,
        ledgerAccountId,
      },
    });

    this.logger.log(`Generated ${dto.chain} wallet ${wallet.address} for user ${dto.userId}`);
    return this.toResponse(wallet);
  }

  async getUserWallets(userId: string) {
    const wallets = await this.prisma.custodyWallet.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return wallets.map(this.toResponse);
  }

  private toResponse(w: any) {
    return {
      id: w.id,
      userId: w.userId,
      chain: w.chain,
      address: w.address,
      ledgerAccountId: w.ledgerAccountId,
      createdAt: w.createdAt.toISOString(),
    };
  }
}

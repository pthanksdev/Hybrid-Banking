import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OnchainSettlementService {
  private readonly logger = new Logger(OnchainSettlementService.name);

  constructor(private readonly prisma: PrismaService) {}

  async triggerOnchainTransfer(dto: {
    senderUserId: string;
    recipientAddress: string;
    chain: string;
    amount: string;
    tokenAddress?: string;
  }) {
    this.logger.log(`Triggering onchain settlement for user ${dto.senderUserId} -> ${dto.recipientAddress} on ${dto.chain}`);

    const transfer = await this.prisma.p2pTransfer.create({
      data: {
        senderUserId: dto.senderUserId,
        recipientUserId: dto.recipientAddress,
        senderLedgerAcc: `ledger-acc-${dto.senderUserId}`,
        recipLedgerAcc: `ledger-acc-${dto.recipientAddress}`,
        amount: BigInt(dto.amount),
        currency: dto.chain.toUpperCase(),
        status: 'SUBMITTED_ONCHAIN',
        note: `On-chain transfer to ${dto.recipientAddress}`,
      },
    });

    return {
      transferId: transfer.id,
      status: 'SUBMITTED_ONCHAIN',
      chain: dto.chain,
      recipientAddress: dto.recipientAddress,
      estimatedConfirmationSecs: 15,
    };
  }
}

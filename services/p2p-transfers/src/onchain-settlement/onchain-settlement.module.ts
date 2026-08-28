import { Module } from '@nestjs/common';
import { OnchainSettlementService } from './onchain-settlement.service';
import { OnchainSettlementController } from './onchain-settlement.controller';

@Module({
  providers: [OnchainSettlementService],
  controllers: [OnchainSettlementController],
  exports: [OnchainSettlementService],
})
export class OnchainSettlementModule {}

import { Module } from '@nestjs/common';
import { StakingService } from './staking.service';
import { StakingController } from './staking.controller';

@Module({
  providers: [StakingService],
  controllers: [StakingController]
})
export class StakingModule {}

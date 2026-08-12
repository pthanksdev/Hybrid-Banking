import { Module } from '@nestjs/common';
import { FeeEstimationService } from './fee-estimation.service';
import { FeeEstimationController } from './fee-estimation.controller';

@Module({
  providers: [FeeEstimationService],
  controllers: [FeeEstimationController],
  exports: [FeeEstimationService],
})
export class FeeEstimationModule {}

import { Module } from '@nestjs/common';
import { BondingCurveController } from './bonding-curve.controller';
import { BondingCurveService } from './bonding-curve.service';

@Module({
  controllers: [BondingCurveController],
  providers: [BondingCurveService],
  exports: [BondingCurveService],
})
export class BondingCurveModule {}

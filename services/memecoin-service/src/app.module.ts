import { Module } from '@nestjs/common';
import { LedgerModule } from '@hybrid-banking/ledger-client';
import { BondingCurveModule } from './bonding-curve/bonding-curve.module';

@Module({
  imports: [
    LedgerModule.forRoot({
      baseUrl: process.env.LEDGER_SERVICE_URL || 'http://localhost:3001',
    }),
    BondingCurveModule,
  ],
})
export class AppModule {}

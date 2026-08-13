import { Module } from '@nestjs/common';
import { LedgerModule } from '@hybrid-banking/ledger-client';
import { SwapsModule } from './swaps/swaps.module';
import { StakingModule } from './staking/staking.module';
import { BridgesModule } from './bridges/bridges.module';
import { YieldModule } from './yield/yield.module';

@Module({
  imports: [
    LedgerModule.forRoot({
      baseUrl: process.env.LEDGER_SERVICE_URL || 'http://localhost:3001',
    }),
    SwapsModule,
    StakingModule,
    BridgesModule,
    YieldModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { LedgerModule } from '@hybrid-banking/ledger-client';
import { PrismaModule } from './prisma/prisma.module';
import { TransfersModule } from './transfers/transfers.module';
import { HandleResolutionModule } from './handle-resolution/handle-resolution.module';
import { OnchainSettlementModule } from './onchain-settlement/onchain-settlement.module';

@Module({
  imports: [
    PrismaModule,
    LedgerModule.forRoot({
      baseUrl: process.env.LEDGER_SERVICE_URL || 'http://localhost:3001',
    }),
    TransfersModule,
    HandleResolutionModule,
    OnchainSettlementModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { LedgerModule } from '@hybrid-banking/ledger-client';
import { PrismaModule } from './prisma/prisma.module';
import { IndexerModule } from './indexer/indexer.module';
import { FeeEstimationModule } from './fee-estimation/fee-estimation.module';

@Module({
  imports: [
    PrismaModule,
    LedgerModule.forRoot({
      baseUrl: process.env.LEDGER_SERVICE_URL || 'http://localhost:3001',
    }),
    IndexerModule,
    FeeEstimationModule,
  ],
})
export class AppModule {}

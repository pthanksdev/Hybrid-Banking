import { Module } from '@nestjs/common';
import { LedgerModule } from '@hybrid-banking/ledger-client';
import { PrismaModule } from './prisma/prisma.module';
import { CardModule } from './card/card.module';
import { AchModule } from './ach/ach.module';
import { ReconciliationModule } from './reconciliation/reconciliation.module';

@Module({
  imports: [
    PrismaModule,
    LedgerModule.forRoot({
      baseUrl: process.env.LEDGER_SERVICE_URL || 'http://localhost:3001',
    }),
    CardModule,
    AchModule,
    ReconciliationModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { LedgerModule } from '@hybrid-banking/ledger-client';
import { PrismaModule } from './prisma/prisma.module';
import { CustodyModule } from './custody/custody.module';
import { KeyManagementModule } from './key-management/key-management.module';

@Module({
  imports: [
    PrismaModule,
    LedgerModule.forRoot({
      baseUrl: process.env.LEDGER_SERVICE_URL || 'http://localhost:3001',
    }),
    CustodyModule,
    KeyManagementModule,
  ],
})
export class AppModule {}

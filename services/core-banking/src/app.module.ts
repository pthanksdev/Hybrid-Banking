import { Module } from '@nestjs/common';
import { LedgerModule } from '@hybrid-banking/ledger-client';
import { PrismaModule } from './prisma/prisma.module';
import { AccountsModule } from './accounts/accounts.module';
import { InterestModule } from './interest/interest.module';
import { StatementsModule } from './statements/statements.module';

@Module({
  imports: [
    PrismaModule,
    LedgerModule.forRoot({
      baseUrl: process.env.LEDGER_SERVICE_URL || 'http://localhost:3001',
    }),
    AccountsModule,
    InterestModule,
    StatementsModule,
  ],
})
export class AppModule {}

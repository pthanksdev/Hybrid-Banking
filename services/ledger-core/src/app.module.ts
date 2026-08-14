import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EntriesModule } from './entries/entries.module';
import { AccountsModule } from './accounts/accounts.module';
import { ReconciliationModule } from './reconciliation/reconciliation.module';

@Module({
  imports: [PrismaModule, EntriesModule, AccountsModule, ReconciliationModule],
})
export class AppModule {}

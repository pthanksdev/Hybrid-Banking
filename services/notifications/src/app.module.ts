import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DispatchModule } from './dispatch/dispatch.module';

@Module({
  imports: [PrismaModule, DispatchModule],
})
export class AppModule {}

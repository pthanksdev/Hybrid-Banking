import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SarModule } from './sar/sar.module';

@Module({
  imports: [PrismaModule, SarModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EvaluationModule } from './evaluation/evaluation.module';

@Module({
  imports: [PrismaModule, EvaluationModule],
})
export class AppModule {}

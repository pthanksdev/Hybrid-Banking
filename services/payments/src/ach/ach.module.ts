import { Module } from '@nestjs/common';
import { AchController } from './ach.controller';
import { AchService } from './ach.service';

@Module({
  controllers: [AchController],
  providers: [AchService],
  exports: [AchService],
})
export class AchModule {}

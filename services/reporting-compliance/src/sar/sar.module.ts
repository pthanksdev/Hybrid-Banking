import { Module } from '@nestjs/common';
import { SarController } from './sar.controller';
import { SarService } from './sar.service';

@Module({
  controllers: [SarController],
  providers: [SarService],
  exports: [SarService],
})
export class SarModule {}

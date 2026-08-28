import { Module } from '@nestjs/common';
import { HandleResolutionService } from './handle-resolution.service';
import { HandleResolutionController } from './handle-resolution.controller';

@Module({
  providers: [HandleResolutionService],
  controllers: [HandleResolutionController],
  exports: [HandleResolutionService],
})
export class HandleResolutionModule {}

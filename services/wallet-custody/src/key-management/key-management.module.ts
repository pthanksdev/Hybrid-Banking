import { Module } from '@nestjs/common';
import { KeyManagementService } from './key-management.service';
import { KeyManagementController } from './key-management.controller';

@Module({
  providers: [KeyManagementService],
  controllers: [KeyManagementController],
  exports: [KeyManagementService],
})
export class KeyManagementModule {}

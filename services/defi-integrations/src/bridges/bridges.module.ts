import { Module } from '@nestjs/common';
import { BridgesController } from './bridges.controller';

@Module({
  controllers: [BridgesController]
})
export class BridgesModule {}

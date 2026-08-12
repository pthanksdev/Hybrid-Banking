import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { IndexerService } from './indexer.service';

@ApiTags('Blockchain Gateway')
@ApiBearerAuth()
@Controller('blockchain')
export class IndexerController {
  constructor(private readonly indexerService: IndexerService) {}

  @Post('deposit/notify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Notify gateway of confirmed on-chain deposit (RPC Listener/Webhook)' })
  async notifyDeposit(@Body() dto: any) {
    return this.indexerService.processDeposit(dto);
  }

  @Get('deposit/:txHash')
  @ApiOperation({ summary: 'Get status of on-chain deposit by txHash' })
  async getDeposit(@Param('txHash') txHash: string) {
    return this.indexerService.getDepositStatus(txHash);
  }
}

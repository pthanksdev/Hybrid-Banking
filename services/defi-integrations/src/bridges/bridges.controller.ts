import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, AuthPayload } from '@hybrid-banking/auth-sdk';
import { CurrentUser } from '@hybrid-banking/auth-sdk/src/decorators/current-user.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { BridgesService } from './bridges.service';
import { BridgeTransferDto } from './dto/bridges.dto';

@ApiTags('DeFi Bridges')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('bridges')
export class BridgesController {
  constructor(private readonly bridgesService: BridgesService) {}

  @Post('transfer')
  @ApiOperation({ summary: 'Initiate a cross-chain bridge transfer' })
  async transfer(@Body() dto: BridgeTransferDto, @CurrentUser() user: AuthPayload) {
    return this.bridgesService.initiateBridge(user.userId, dto);
  }

  @Get('status/:txId')
  @ApiOperation({ summary: 'Get status of a bridge transfer' })
  async getStatus(@Param('txId') txId: string) {
    return this.bridgesService.getBridgeStatus(txId);
  }
}

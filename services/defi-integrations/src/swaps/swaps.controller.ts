import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { SwapsService } from './swaps.service';
import { ExecuteSwapDto } from './swap.dto';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';

@ApiTags('DeFi Swaps')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('defi/swaps')
export class SwapsController {
  constructor(private readonly swapsService: SwapsService) {}

  @Post('execute')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Execute instant DEX swap with ledger reconciliation' })
  async executeSwap(@Body() dto: ExecuteSwapDto) {
    return this.swapsService.executeSwap(dto);
  }
}

import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { BondingCurveService } from './bonding-curve.service';
import { LaunchTokenDto, TradeTokenDto } from './dto/memecoin.dto';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';

@ApiTags('Memecoins')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('memecoins')
export class BondingCurveController {
  constructor(private readonly bondingCurveService: BondingCurveService) {}

  @Post('launch')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Launch a new memecoin on the bonding curve' })
  async launch(@Body() dto: LaunchTokenDto) {
    return this.bondingCurveService.launchToken(dto);
  }

  @Post('trade')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Buy or Sell tokens on the bonding curve' })
  async trade(@Body() dto: TradeTokenDto) {
    return this.bondingCurveService.tradeToken(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all active memecoins' })
  async list() {
    return this.bondingCurveService.listTokens();
  }

  @Get(':tokenId')
  @ApiOperation({ summary: 'Get memecoin details and curve progress' })
  async get(@Param('tokenId') tokenId: string) {
    return this.bondingCurveService.getToken(tokenId);
  }
}

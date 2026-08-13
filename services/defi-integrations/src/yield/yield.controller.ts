import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, AuthPayload } from '@hybrid-banking/auth-sdk';
import { CurrentUser } from '@hybrid-banking/auth-sdk/src/decorators/current-user.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { YieldService } from './yield.service';
import { DepositYieldDto, WithdrawYieldDto } from './dto/yield.dto';

@ApiTags('DeFi Yield')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('yield')
export class YieldController {
  constructor(private readonly yieldService: YieldService) {}

  @Post('deposit')
  @ApiOperation({ summary: 'Deposit funds into a yield vault' })
  async deposit(@Body() dto: DepositYieldDto, @CurrentUser() user: AuthPayload) {
    return this.yieldService.depositToVault(user.userId, dto);
  }

  @Post('withdraw')
  @ApiOperation({ summary: 'Withdraw funds from a yield vault' })
  async withdraw(@Body() dto: WithdrawYieldDto, @CurrentUser() user: AuthPayload) {
    return this.yieldService.withdrawFromVault(user.userId, dto);
  }

  @Get('rates')
  @ApiOperation({ summary: 'Get current yield rates for vaults' })
  async getRates() {
    return this.yieldService.getYieldRates();
  }
}

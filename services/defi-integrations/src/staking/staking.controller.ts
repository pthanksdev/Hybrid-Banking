import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, AuthPayload } from '@hybrid-banking/auth-sdk';
import { CurrentUser } from '@hybrid-banking/auth-sdk/src/decorators/current-user.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { StakingService } from './staking.service';
import { StakeAssetDto, UnstakeAssetDto } from './dto/staking.dto';

@ApiTags('DeFi Staking')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('staking')
export class StakingController {
  constructor(private readonly stakingService: StakingService) {}

  @Post('stake')
  @ApiOperation({ summary: 'Initiate a staking deposit' })
  async stake(@Body() dto: StakeAssetDto, @CurrentUser() user: AuthPayload) {
    return this.stakingService.initiateStake(user.userId, dto);
  }

  @Post('unstake')
  @ApiOperation({ summary: 'Initiate an unstaking withdrawal' })
  async unstake(@Body() dto: UnstakeAssetDto, @CurrentUser() user: AuthPayload) {
    return this.stakingService.initiateUnstake(user.userId, dto);
  }

  @Get('positions')
  @ApiOperation({ summary: 'Get user staking positions' })
  async getPositions(@CurrentUser() user: AuthPayload) {
    return this.stakingService.getUserPositions(user.userId);
  }
}

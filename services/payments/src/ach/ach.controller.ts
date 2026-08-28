import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AchService } from './ach.service';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';

@ApiTags('ACH Payments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('payments/ach')
export class AchController {
  constructor(private readonly achService: AchService) {}

  @Post('transfer')
  @ApiOperation({ summary: 'Initiate ACH inbound or outbound transfer' })
  async transfer(@Body() dto: any) {
    return this.achService.initiateAchTransfer(dto);
  }
}

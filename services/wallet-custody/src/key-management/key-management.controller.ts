import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { KeyManagementService } from './key-management.service';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';

export class GenerateKeyShareDto {
  @ApiProperty() @IsString() userId: string;
  @ApiProperty({ example: 'ethereum' }) @IsString() chain: string;
}

@ApiTags('Key Management & Custody MPC')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('custody/keys')
export class KeyManagementController {
  constructor(private readonly keyService: KeyManagementService) {}

  @Post('generate-share')
  @ApiOperation({ summary: 'Generate threshold MPC key share behind HSM' })
  async generateShare(@Body() dto: GenerateKeyShareDto) {
    return this.keyService.generateMpcKeyShare(dto.userId, dto.chain);
  }

  @Get('cooldown/:userId/:address')
  @ApiOperation({ summary: 'Verify withdrawal whitelist address cooldown status' })
  async checkCooldown(@Param('userId') userId: string, @Param('address') address: string) {
    return this.keyService.verifyAddressCooldown(userId, address);
  }
}

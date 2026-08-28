import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { OnchainSettlementService } from './onchain-settlement.service';

export class TriggerOnchainDto {
  @ApiProperty() @IsString() senderUserId: string;
  @ApiProperty() @IsString() recipientAddress: string;
  @ApiProperty({ example: 'ethereum' }) @IsString() chain: string;
  @ApiProperty({ example: '1000000000000000000' }) @IsString() amount: string;
  @ApiProperty({ required: false }) @IsOptional() @IsString() tokenAddress?: string;
}

@ApiTags('P2P Onchain Settlement')
@ApiBearerAuth()
@Controller('p2p/onchain')
export class OnchainSettlementController {
  constructor(private readonly settlementService: OnchainSettlementService) {}

  @Post('transfer')
  @ApiOperation({ summary: 'Trigger external wallet on-chain P2P settlement' })
  async transfer(@Body() dto: TriggerOnchainDto) {
    return this.settlementService.triggerOnchainTransfer(dto);
  }
}

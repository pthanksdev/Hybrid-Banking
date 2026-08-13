import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive, IsOptional } from 'class-validator';

export class BridgeTransferDto {
  @ApiProperty({ description: 'Source chain identifier' })
  @IsString()
  sourceChain: string;

  @ApiProperty({ description: 'Destination chain identifier' })
  @IsString()
  destChain: string;

  @ApiProperty({ description: 'Asset symbol to bridge' })
  @IsString()
  asset: string;

  @ApiProperty({ description: 'Amount to bridge in smallest unit' })
  @IsNumber()
  @IsPositive()
  amount: number;

  @ApiProperty({ description: 'Recipient address on destination chain', required: false })
  @IsOptional()
  @IsString()
  recipient?: string;
}

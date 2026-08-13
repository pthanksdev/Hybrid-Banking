import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive, IsOptional, Max, Min } from 'class-validator';

export class StakeAssetDto {
  @ApiProperty({ description: 'The protocol to stake with, e.g., lido, rocketpool' })
  @IsString()
  protocol: string;

  @ApiProperty({ description: 'Asset symbol to stake, e.g., ETH' })
  @IsString()
  asset: string;

  @ApiProperty({ description: 'Amount to stake in smallest unit' })
  @IsNumber()
  @IsPositive()
  amount: number;

  @ApiProperty({ description: 'Slippage tolerance in basis points', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1000)
  slippageBps?: number;
}

export class UnstakeAssetDto {
  @ApiProperty({ description: 'The protocol to unstake from' })
  @IsString()
  protocol: string;

  @ApiProperty({ description: 'Staked asset symbol, e.g., stETH' })
  @IsString()
  asset: string;

  @ApiProperty({ description: 'Amount to unstake in smallest unit' })
  @IsNumber()
  @IsPositive()
  amount: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsPositive } from 'class-validator';

export class DepositYieldDto {
  @ApiProperty({ description: 'The vault or protocol to deposit into, e.g., aave, compound' })
  @IsString()
  vault: string;

  @ApiProperty({ description: 'Asset symbol to deposit' })
  @IsString()
  asset: string;

  @ApiProperty({ description: 'Amount to deposit in smallest unit' })
  @IsNumber()
  @IsPositive()
  amount: number;
}

export class WithdrawYieldDto {
  @ApiProperty({ description: 'The vault or protocol to withdraw from' })
  @IsString()
  vault: string;

  @ApiProperty({ description: 'Asset symbol to withdraw' })
  @IsString()
  asset: string;

  @ApiProperty({ description: 'Amount to withdraw in smallest unit' })
  @IsNumber()
  @IsPositive()
  amount: number;
}

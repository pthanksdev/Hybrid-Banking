import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class ExecuteSwapDto {
  @ApiProperty() @IsString() userId: string;
  @ApiProperty() @IsString() userSourceLedgerAcc: string;
  @ApiProperty() @IsString() userDestLedgerAcc: string;
  @ApiProperty({ example: 'ETH' }) @IsString() fromToken: string;
  @ApiProperty({ example: 'USDC' }) @IsString() toToken: string;
  @ApiProperty({ example: '1000000000000000000', description: 'Amount in smallest unit string' }) @IsString() fromAmount: string;
  @ApiProperty({ example: '3200000000', description: 'Expected output in smallest unit string' }) @IsString() expectedToAmount: string;
  @ApiProperty({ example: 'swap-key-123' }) @IsString() idempotencyKey: string;
}

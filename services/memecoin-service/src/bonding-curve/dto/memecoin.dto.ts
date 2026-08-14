import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';

export class LaunchTokenDto {
  @ApiProperty({ example: 'DogeBank' }) @IsString() name: string;
  @ApiProperty({ example: 'DOGEB' }) @IsString() symbol: string;
  @ApiProperty() @IsString() creatorUserId: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() description?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() imageUrl?: string;
}

export class TradeTokenDto {
  @ApiProperty() @IsString() tokenId: string;
  @ApiProperty() @IsString() buyerUserId: string;
  @ApiProperty() @IsString() userFiatLedgerAcc: string;
  @ApiProperty() @IsString() userTokenLedgerAcc: string;
  @ApiProperty({ enum: ['BUY', 'SELL'] }) @IsString() side: 'BUY' | 'SELL';
  @ApiProperty({ example: '1000000', description: 'Token quantity string' }) @IsString() tokenAmount: string;
  @ApiProperty({ example: 'trade-key-123' }) @IsString() idempotencyKey: string;
}

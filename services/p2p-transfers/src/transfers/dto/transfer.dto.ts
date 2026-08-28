import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, MinLength } from 'class-validator';

export class SendP2pTransferDto {
  @ApiProperty() @IsString() senderUserId: string;
  @ApiProperty() @IsString() senderLedgerAcc: string;
  @ApiProperty() @IsString() recipientUserId: string;
  @ApiProperty() @IsString() recipLedgerAcc: string;
  @ApiProperty({ example: '5000', description: 'Amount in smallest unit string' }) @IsString() amount: string;
  @ApiProperty({ example: 'USD' }) @IsString() currency: string;
  @ApiProperty({ required: false, example: 'Dinner payment' }) @IsString() @IsOptional() note?: string;
  @ApiProperty({ example: 'p2p-key-123' }) @IsString() idempotencyKey: string;
}

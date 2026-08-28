import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, MinLength, MaxLength } from 'class-validator';

export class ProcessCardPaymentDto {
  @ApiProperty() @IsString() userId: string;
  @ApiProperty() @IsString() userLedgerAccountId: string;
  @ApiProperty({ example: '10000', description: 'Amount in cents (BigInt string)' }) @IsString() amount: string;
  @ApiProperty({ example: 'USD' }) @IsString() currency: string;
  @ApiProperty({ example: 'tok_visa_demo' }) @IsString() token: string;
}

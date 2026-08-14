import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, MinLength, MaxLength, IsEnum } from 'class-validator';

export class CreateLedgerAccountDto {
  @ApiProperty({ description: 'Account name', example: 'User Checking - John Doe' })
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  name: string;

  @ApiProperty({ description: 'Account type', enum: ['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'] })
  @IsString()
  type: string;

  @ApiProperty({ description: 'Currency code', example: 'USD' })
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  currency: string;

  @ApiProperty({ description: 'Additional metadata', required: false })
  @IsOptional()
  metadata?: Record<string, unknown>;
}

export class BalanceResponseDto {
  @ApiProperty() accountId: string;
  @ApiProperty({ description: 'Balance in smallest unit as string' }) balance: string;
  @ApiProperty() currency: string;
  @ApiProperty() asOf: string;
}

export class LedgerAccountResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() name: string;
  @ApiProperty() type: string;
  @ApiProperty() currency: string;
  @ApiProperty() createdAt: string;
}

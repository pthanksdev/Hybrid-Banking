import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray, ValidateNested, MinLength, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEntryDto {
  @ApiProperty({ description: 'Ledger account ID', example: 'clx1234567890' })
  @IsString()
  accountId: string;

  @ApiProperty({ description: 'Amount in smallest unit as string (BigInt)', example: '10000' })
  @IsString()
  amount: string;

  @ApiProperty({ description: 'Currency code', example: 'USD' })
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  currency: string;

  @ApiProperty({ description: 'Entry description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Additional metadata', required: false })
  @IsOptional()
  metadata?: Record<string, unknown>;
}

export class PostTransactionDto {
  @ApiProperty({ description: 'Idempotency key to prevent duplicate transactions', example: 'txn-uuid-123' })
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  idempotencyKey: string;

  @ApiProperty({ description: 'Array of balanced entries (must sum to zero)', type: [CreateEntryDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateEntryDto)
  entries: CreateEntryDto[];

  @ApiProperty({ description: 'Transaction description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Additional metadata', required: false })
  @IsOptional()
  metadata?: Record<string, unknown>;
}

export class TransactionResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() entries: EntryResponseDto[];
  @ApiProperty() description?: string;
  @ApiProperty() createdAt: string;
}

export class EntryResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() accountId: string;
  @ApiProperty() amount: string;
  @ApiProperty() currency: string;
  @ApiProperty() description?: string;
  @ApiProperty() transactionId: string;
  @ApiProperty() createdAt: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsNumber, MinLength, MaxLength } from 'class-validator';
import { AccountType, AccountState } from '@hybrid-banking/types';

export class CreateBankAccountDto {
  @ApiProperty({ description: 'User ID owning the account', example: 'clx1234567890' })
  @IsString()
  userId: string;

  @ApiProperty({ enum: AccountType })
  @IsEnum(AccountType)
  type: AccountType;

  @ApiProperty({ example: 'USD', default: 'USD' })
  @IsString()
  @MinLength(1)
  @MaxLength(10)
  currency: string;
}

export class FreezeAccountDto {
  @ApiProperty({ example: 'Suspicious transaction activity under review' })
  @IsString()
  reason: string;
}

export class BankAccountResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() userId: string;
  @ApiProperty() accountNumber: string;
  @ApiProperty() ledgerAccountId: string;
  @ApiProperty() type: string;
  @ApiProperty() currency: string;
  @ApiProperty() state: string;
  @ApiProperty({ description: 'Balance derived directly from ledger-core' }) balance: string;
  @ApiProperty() createdAt: string;
}

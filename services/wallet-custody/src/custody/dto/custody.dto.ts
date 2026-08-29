import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';

export class GenerateWalletDto {
  @ApiProperty() @IsString() userId: string;
  @ApiProperty({ example: 'ETH', enum: ['ETH', 'SOL', 'BASE', 'ARB'] }) @IsString() chain: string;
}

export class WalletResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() userId: string;
  @ApiProperty() chain: string;
  @ApiProperty() address: string;
  @ApiProperty() ledgerAccountId: string;
  @ApiProperty() createdAt: string;
}

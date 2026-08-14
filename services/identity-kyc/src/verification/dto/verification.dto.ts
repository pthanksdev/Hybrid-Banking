import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsOptional, IsUrl } from 'class-validator';

export enum DocumentType {
  PASSPORT = 'PASSPORT',
  DRIVERS_LICENSE = 'DRIVERS_LICENSE',
  NATIONAL_ID = 'NATIONAL_ID',
}

export class SubmitKycDto {
  @ApiProperty({ description: 'User ID submitting verification', example: 'clx1234567890' })
  @IsString()
  userId: string;

  @ApiProperty({ enum: DocumentType })
  @IsEnum(DocumentType)
  documentType: DocumentType;

  @ApiProperty({ example: 'A12345678' })
  @IsString()
  documentNumber: string;

  @ApiProperty({ example: 'US' })
  @IsString()
  documentCountry: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  selfieUrl?: string;

  @ApiProperty()
  @IsUrl()
  documentFrontUrl: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  documentBackUrl?: string;
}

export class KycDecisionDto {
  @ApiProperty({ description: 'Verification ID' })
  @IsString()
  verificationId: string;

  @ApiProperty({ enum: ['VERIFIED', 'REJECTED'] })
  @IsEnum(['VERIFIED', 'REJECTED'])
  decision: 'VERIFIED' | 'REJECTED';

  @ApiProperty({ example: 'Document verified successfully' })
  @IsString()
  reason: string;

  @ApiProperty({ example: 'ADMIN' })
  @IsString()
  decidedBy: string;

  @ApiProperty({ required: false })
  @IsOptional()
  providerResponse?: Record<string, unknown>;
}

export class KycVerificationResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() userId: string;
  @ApiProperty() status: string;
  @ApiProperty() documentType: string;
  @ApiProperty() createdAt: string;
}

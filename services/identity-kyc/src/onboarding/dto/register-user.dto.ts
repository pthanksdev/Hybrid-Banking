import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, MinLength, MaxLength } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({ example: 'john@example.com' }) @IsEmail() email: string;
  @ApiProperty({ required: false, example: '+1234567890' }) @IsString() @IsOptional() phone?: string;
  @ApiProperty({ example: 'John' }) @IsString() @MinLength(1) @MaxLength(100) firstName: string;
  @ApiProperty({ example: 'Doe' }) @IsString() @MinLength(1) @MaxLength(100) lastName: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() dateOfBirth?: string;
  @ApiProperty({ required: false, example: 'US', description: 'ISO 3166-1 alpha-2' }) @IsString() @IsOptional() country?: string;
}

export class UserResponseDto {
  @ApiProperty() id: string;
  @ApiProperty() email: string;
  @ApiProperty() firstName: string;
  @ApiProperty() lastName: string;
  @ApiProperty() kycStatus: string;
  @ApiProperty() kycTier: string;
  @ApiProperty() createdAt: string;
}

import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { VerificationService } from './verification.service';
import { SubmitKycDto, KycDecisionDto, KycVerificationResponseDto } from './dto/verification.dto';

@ApiTags('Verification')
@Controller('kyc')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Post('submit')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Submit KYC verification documents' })
  @ApiResponse({ status: 201, type: KycVerificationResponseDto })
  async submit(@Body() dto: SubmitKycDto) {
    return this.verificationService.submitVerification(dto);
  }

  @Post('decision')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Process KYC decision (Admin / Automated callback)' })
  @ApiResponse({ status: 200, type: KycVerificationResponseDto })
  async decision(@Body() dto: KycDecisionDto) {
    return this.verificationService.processDecision(dto);
  }

  @Get('status/:userId')
  @ApiOperation({ summary: 'Get user KYC status and history' })
  async getStatus(@Param('userId') userId: string) {
    return this.verificationService.getStatus(userId);
  }
}

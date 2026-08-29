import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { EvaluationService } from './evaluation.service';

@ApiTags('Risk & Fraud')
@ApiBearerAuth()
@Controller('risk')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post('evaluate')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Evaluate transaction risk score and decision' })
  async evaluate(@Body() dto: any) {
    return this.evaluationService.evaluateTransaction(dto);
  }
}

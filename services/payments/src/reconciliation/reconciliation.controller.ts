import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ReconciliationService } from './reconciliation.service';

export class RunReconciliationDto {
  @ApiProperty({ example: '2026-08-10', description: 'YYYY-MM-DD date format' })
  @IsString()
  reportDate: string;
}

@ApiTags('Reconciliation')
@ApiBearerAuth()
@Controller('payments/reconciliation')
export class ReconciliationController {
  constructor(private readonly reconciliationService: ReconciliationService) {}

  @Post('run')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Run daily processor payment reconciliation report' })
  async runReconciliation(@Body() dto: RunReconciliationDto) {
    return this.reconciliationService.reconcileDailyProcessorReport(dto.reportDate);
  }
}

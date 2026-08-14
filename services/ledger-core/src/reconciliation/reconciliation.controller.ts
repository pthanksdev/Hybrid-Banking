import { Controller, Post, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ReconciliationService } from './reconciliation.service';

@ApiTags('Reconciliation')
@ApiBearerAuth()
@Controller('reconciliation')
export class ReconciliationController {
  constructor(private readonly reconciliationService: ReconciliationService) {}

  @Post('run')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Run ledger reconciliation', description: 'Verifies all transactions balance (debits = credits)' })
  @ApiResponse({ status: 200, description: 'Reconciliation result' })
  async runReconciliation() {
    return this.reconciliationService.runReconciliation();
  }

  @Post('cleanup-keys')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Clean up expired idempotency keys' })
  async cleanupKeys() {
    return this.reconciliationService.cleanupIdempotencyKeys();
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { FeeEstimationService } from './fee-estimation.service';

@ApiTags('Gas & Fee Estimation')
@ApiBearerAuth()
@Controller('blockchain/gas')
export class FeeEstimationController {
  constructor(private readonly feeService: FeeEstimationService) {}

  @Get('estimate/:chain')
  @ApiOperation({ summary: 'Get current tiered gas estimates (slow, standard, fast)' })
  async getEstimate(@Param('chain') chain: string) {
    return this.feeService.getGasEstimate(chain);
  }
}

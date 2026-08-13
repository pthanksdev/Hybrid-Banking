import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { InterestService } from './interest.service';

@ApiTags('Interest')
@ApiBearerAuth()
@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Post('accrue-daily')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Trigger daily interest accrual job (Cron / Admin)' })
  async triggerDailyAccrual() {
    return this.interestService.processDailyInterestAccrual();
  }
}

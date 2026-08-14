import { Controller, Post, Get, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ScreeningService } from './screening.service';

@ApiTags('Screening')
@ApiBearerAuth()
@Controller('screening')
export class ScreeningController {
  constructor(private readonly screeningService: ScreeningService) {}

  @Post(':userId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Trigger automated PEP and sanctions screening' })
  async screenUser(@Param('userId') userId: string) {
    return this.screeningService.screenUser(userId);
  }

  @Get('history/:userId')
  @ApiOperation({ summary: 'Get user screening history' })
  async getHistory(@Param('userId') userId: string) {
    return this.screeningService.getScreeningHistory(userId);
  }
}

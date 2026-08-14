import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { DispatchService } from './dispatch.service';

@ApiTags('Notifications')
@ApiBearerAuth()
@Controller('notifications')
export class DispatchController {
  constructor(private readonly dispatchService: DispatchService) {}

  @Post('send')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send transaction alert, security OTP, or push notification' })
  async send(@Body() dto: any) {
    return this.dispatchService.sendNotification(dto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get notification log history for user' })
  async getHistory(@Param('userId') userId: string) {
    return this.dispatchService.getUserHistory(userId);
  }
}

import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CardService } from './card.service';
import { ProcessCardPaymentDto } from './card-payment.dto';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';

@ApiTags('Card Payments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('payments/card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post('deposit')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Deposit funds via card payment' })
  async deposit(@Body() dto: ProcessCardPaymentDto) {
    return this.cardService.processCardDeposit(dto);
  }
}

import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CustodyService } from './custody.service';
import { GenerateWalletDto, WalletResponseDto } from './dto/custody.dto';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';

@ApiTags('Wallet Custody')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('wallets')
export class CustodyController {
  constructor(private readonly custodyService: CustodyService) {}

  @Post('generate')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Generate a new deposit wallet for user' })
  @ApiResponse({ status: 201, type: WalletResponseDto })
  async generate(@Body() dto: GenerateWalletDto) {
    return this.custodyService.generateWallet(dto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'List all custody wallets for a user' })
  async getUserWallets(@Param('userId') userId: string) {
    return this.custodyService.getUserWallets(userId);
  }
}

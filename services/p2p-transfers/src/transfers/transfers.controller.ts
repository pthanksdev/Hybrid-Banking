import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { TransfersService } from './transfers.service';
import { SendP2pTransferDto } from './dto/transfer.dto';
import { JwtAuthGuard, AuthPayload, AuthClient } from '@hybrid-banking/auth-sdk';
import { CurrentUser } from '@hybrid-banking/auth-sdk/src/decorators/current-user.decorator';

@ApiTags('P2P Transfers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('p2p')
export class TransfersController {
  private readonly authClient: AuthClient;

  constructor(private readonly transfersService: TransfersService) {
    this.authClient = new AuthClient(process.env.JWT_SECRET || 'secret');
  }

  @Post('send')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Send instant P2P transfer to another user' })
  async send(@Body() dto: SendP2pTransferDto, @CurrentUser() user: AuthPayload) {
    // Arbitrary threshold for "large" transfer to trigger step-up auth
    if (dto.amount > 1000) {
      const requiresMfa = this.authClient.requiresStepUpAuth('large_p2p_transfer', user);
      if (requiresMfa && !user.mfaEnabled) { // Mock logic for amr checks
        throw new UnauthorizedException('Step-up MFA authentication required for large transfers');
      }
    }
    return this.transfersService.sendTransfer(dto);
  }

  @Get('history/:userId')
  @ApiOperation({ summary: 'Get user P2P transfer history' })
  async history(@Param('userId') userId: string) {
    return this.transfersService.getTransferHistory(userId);
  }
}

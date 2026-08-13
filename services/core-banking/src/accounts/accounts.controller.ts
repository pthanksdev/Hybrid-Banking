import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import { CreateBankAccountDto, FreezeAccountDto, BankAccountResponseDto } from './dto/account.dto';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';

@ApiTags('Bank Accounts')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new bank account' })
  @ApiResponse({ status: 201, type: BankAccountResponseDto })
  async createAccount(@Body() dto: CreateBankAccountDto) {
    return this.accountsService.createAccount(dto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all bank accounts for a user with live balances' })
  async getUserAccounts(@Param('userId') userId: string) {
    return this.accountsService.getUserAccounts(userId);
  }

  @Get(':accountId')
  @ApiOperation({ summary: 'Get account details with live balance derived from ledger-core' })
  @ApiResponse({ status: 200, type: BankAccountResponseDto })
  async getAccount(@Param('accountId') accountId: string) {
    return this.accountsService.getAccount(accountId);
  }

  @Post(':accountId/freeze')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Freeze an account (Admin / Compliance)' })
  async freezeAccount(@Param('accountId') accountId: string, @Body() dto: FreezeAccountDto) {
    return this.accountsService.freezeAccount(accountId, dto);
  }

  @Post(':accountId/unfreeze')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Unfreeze an account (Admin / Compliance)' })
  async unfreezeAccount(@Param('accountId') accountId: string) {
    return this.accountsService.unfreezeAccount(accountId);
  }
}

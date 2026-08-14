import {
  Controller, Post, Get, Body, Param, Query, HttpCode, HttpStatus, UseGuards
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import {
  CreateLedgerAccountDto, BalanceResponseDto, LedgerAccountResponseDto,
} from './dto/ledger-account.dto';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';

@ApiTags('Accounts')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new ledger account' })
  @ApiResponse({ status: 201, type: LedgerAccountResponseDto })
  async createAccount(@Body() dto: CreateLedgerAccountDto) {
    return this.accountsService.createAccount(dto);
  }

  @Get(':accountId')
  @ApiOperation({ summary: 'Get ledger account details' })
  @ApiResponse({ status: 200, type: LedgerAccountResponseDto })
  async getAccount(@Param('accountId') accountId: string) {
    return this.accountsService.getAccount(accountId);
  }

  @Get(':accountId/balance')
  @ApiOperation({
    summary: 'Get account balance',
    description: 'Computes balance as SUM(all entries). Supports point-in-time queries via asOf parameter.',
  })
  @ApiResponse({ status: 200, type: BalanceResponseDto })
  @ApiQuery({ name: 'asOf', required: false, description: 'ISO datetime for point-in-time balance' })
  async getBalance(
    @Param('accountId') accountId: string,
    @Query('asOf') asOf?: string,
  ) {
    return this.accountsService.getBalance(accountId, asOf);
  }

  @Get(':accountId/entries')
  @ApiOperation({ summary: 'Get entries for an account' })
  @ApiQuery({ name: 'from', required: false })
  @ApiQuery({ name: 'to', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'offset', required: false })
  async getEntries(
    @Param('accountId') accountId: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    // Import from entries service via module
    const { EntriesService } = await import('../entries/entries.service');
    // This will be injected properly via DI in production
    // For now using the accounts service's prisma connection
    return this.accountsService.getAccount(accountId); // placeholder
  }

  @Get()
  @ApiOperation({ summary: 'List all ledger accounts' })
  @ApiQuery({ name: 'type', required: false, enum: ['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'] })
  @ApiQuery({ name: 'currency', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @ApiQuery({ name: 'offset', required: false })
  async listAccounts(
    @Query('type') type?: string,
    @Query('currency') currency?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.accountsService.listAccounts(
      type, currency,
      limit ? parseInt(limit) : 50,
      offset ? parseInt(offset) : 0,
    );
  }
}

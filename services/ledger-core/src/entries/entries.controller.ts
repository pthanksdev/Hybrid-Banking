import {
  Controller, Post, Get, Body, Param, Query, HttpCode, HttpStatus, NotFoundException, UseGuards
} from '@nestjs/common';
import {
  ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery,
} from '@nestjs/swagger';
import { EntriesService } from './entries.service';
import { PostTransactionDto, TransactionResponseDto } from './dto/post-transaction.dto';
import { JwtAuthGuard } from '@hybrid-banking/auth-sdk';

@ApiTags('Entries')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Post a double-entry transaction',
    description: 'Posts a balanced set of ledger entries. All entry amounts must sum to zero (debits = credits). Uses idempotency key to prevent duplicates.',
  })
  @ApiResponse({ status: 201, description: 'Transaction posted successfully', type: TransactionResponseDto })
  @ApiResponse({ status: 400, description: 'Entries do not balance or invalid data' })
  @ApiResponse({ status: 409, description: 'Idempotency key already used' })
  async postTransaction(@Body() dto: PostTransactionDto) {
    return this.entriesService.postTransaction(dto);
  }

  @Get(':transactionId')
  @ApiOperation({ summary: 'Get a transaction by ID' })
  @ApiResponse({ status: 200, description: 'Transaction found', type: TransactionResponseDto })
  @ApiResponse({ status: 404, description: 'Transaction not found' })
  async getTransaction(@Param('transactionId') transactionId: string) {
    const result = await this.entriesService.getTransaction(transactionId);
    if (!result) {
      throw new NotFoundException(`Transaction ${transactionId} not found`);
    }
    return result;
  }
}

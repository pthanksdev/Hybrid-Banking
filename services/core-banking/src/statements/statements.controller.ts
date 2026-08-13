import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { StatementsService } from './statements.service';

@ApiTags('Statements')
@ApiBearerAuth()
@Controller('statements')
export class StatementsController {
  constructor(private readonly statementsService: StatementsService) {}

  @Get(':accountId')
  @ApiOperation({ summary: 'Generate account statement' })
  @ApiQuery({ name: 'from', required: false })
  @ApiQuery({ name: 'to', required: false })
  async getStatement(
    @Param('accountId') accountId: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.statementsService.generateStatement(accountId, from, to);
  }
}

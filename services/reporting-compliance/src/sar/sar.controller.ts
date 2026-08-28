import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { SarService } from './sar.service';

@ApiTags('Compliance Reporting')
@ApiBearerAuth()
@Controller('compliance/sar')
export class SarController {
  constructor(private readonly sarService: SarService) {}

  @Post('draft')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Draft a Suspicious Activity Report (SAR)' })
  async draft(@Body() dto: any) {
    return this.sarService.createSarReport(dto);
  }

  @Post(':reportId/file')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'File official SAR report with FinCEN' })
  async file(@Param('reportId') reportId: string) {
    return this.sarService.fileSarReport(reportId);
  }

  @Get()
  @ApiOperation({ summary: 'List all compliance SAR filings' })
  async list() {
    return this.sarService.listReports();
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { HandleResolutionService } from './handle-resolution.service';

@ApiTags('P2P Handle Resolution')
@ApiBearerAuth()
@Controller('p2p/handles')
export class HandleResolutionController {
  constructor(private readonly resolutionService: HandleResolutionService) {}

  @Get(':handle')
  @ApiOperation({ summary: 'Resolve username, phone, or QR code handle to banking account ID' })
  async resolve(@Param('handle') handle: string) {
    return this.resolutionService.resolveHandle(handle);
  }
}

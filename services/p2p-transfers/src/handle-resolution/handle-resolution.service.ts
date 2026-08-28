import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HandleResolutionService {
  constructor(private readonly prisma: PrismaService) {}

  async resolveHandle(handle: string) {
    const cleanHandle = handle.trim().replace(/^@/, '');
    
    // Stub resolution matching user handles / phones / QR codes
    return {
      handle: `@${cleanHandle}`,
      userId: `user_resolved_${cleanHandle}`,
      displayName: `User ${cleanHandle}`,
      verifiedKyc: true,
      defaultAccountId: `act_${cleanHandle}_checking`,
    };
  }
}

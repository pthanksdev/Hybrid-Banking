import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ScreeningService {
  private readonly logger = new Logger(ScreeningService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Screen a user against watchlists (Sanctions, PEP, Adverse Media).
   */
  async screenUser(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error(`User ${userId} not found`);
    }

    // Mock screening against sanction lists (e.g. OFAC, EU Sanctions, PEP lists)
    const isMockFlagged = user.lastName.toLowerCase().includes('sanction');

    const result = await this.prisma.screeningResult.create({
      data: {
        userId,
        type: 'SANCTIONS_AND_PEP',
        provider: 'SUMSUB_STUB',
        matched: isMockFlagged,
        details: isMockFlagged
          ? { reason: 'Name matched demo sanction list entry', matchScore: 0.98 }
          : { status: 'CLEAN' },
      },
    });

    this.logger.log(`Screening completed for user ${userId}. Matched: ${isMockFlagged}`);
    return result;
  }

  async getScreeningHistory(userId: string) {
    return this.prisma.screeningResult.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}

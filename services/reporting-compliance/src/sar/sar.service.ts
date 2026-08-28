import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { randomUUID } from 'crypto';

@Injectable()
export class SarService {
  private readonly logger = new Logger(SarService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createSarReport(dto: {
    userId: string;
    narrative: string;
    riskScore: number;
  }) {
    const report = await this.prisma.suspiciousActivityReport.create({
      data: {
        userId: dto.userId,
        narrative: dto.narrative,
        riskScore: dto.riskScore,
        status: 'DRAFT',
      },
    });

    this.logger.warn(`Drafted SAR report ${report.id} for user ${dto.userId}`);
    return report;
  }

  async fileSarReport(reportId: string) {
    const refNum = `BSA-SAR-${Date.now()}-${randomUUID().substring(0, 4).toUpperCase()}`;

    const updated = await this.prisma.suspiciousActivityReport.update({
      where: { id: reportId },
      data: {
        status: 'FILED',
        filedAt: new Date(),
        referenceNumber: refNum,
      },
    });

    this.logger.log(`FILED regulatory SAR ${reportId}. Ref: ${refNum}`);
    return updated;
  }

  async listReports() {
    return this.prisma.suspiciousActivityReport.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DispatchService {
  private readonly logger = new Logger(DispatchService.name);

  constructor(private readonly prisma: PrismaService) {}

  async sendNotification(dto: {
    userId: string;
    channel: 'EMAIL' | 'SMS' | 'PUSH' | 'WEBHOOK';
    subject?: string;
    content: string;
    metadata?: Record<string, unknown>;
  }) {
    this.logger.log(`Dispatching ${dto.channel} to user ${dto.userId}: ${dto.subject || dto.content}`);

    const log = await this.prisma.notificationLog.create({
      data: {
        userId: dto.userId,
        channel: dto.channel,
        subject: dto.subject,
        content: dto.content,
        status: 'DELIVERED',
        metadata: (dto.metadata || undefined) as any,
      },
    });

    return { id: log.id, status: 'DELIVERED', timestamp: log.createdAt.toISOString() };
  }

  async getUserHistory(userId: string) {
    return this.prisma.notificationLog.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }
}

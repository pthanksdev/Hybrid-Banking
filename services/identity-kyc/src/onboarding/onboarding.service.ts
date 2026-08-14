import { Injectable, ConflictException, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { KycStatus } from '@hybrid-banking/types';

@Injectable()
export class OnboardingService {
  private readonly logger = new Logger(OnboardingService.name);

  constructor(private readonly prisma: PrismaService) {}

  async registerUser(dto: RegisterUserDto) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) {
      throw new ConflictException(`Email ${dto.email} is already registered`);
    }

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash: (dto as any).passwordHash || 'hash_stub',
        firstName: dto.firstName,
        lastName: dto.lastName,
        phone: dto.phone,
        kycStatus: KycStatus.UNVERIFIED as any,
      },
    });

    await this.prisma.kycAuditLog.create({
      data: {
        userId: user.id,
        action: 'USER_REGISTERED',
        toState: KycStatus.UNVERIFIED as any,
        performedBy: user.id,
      },
    });

    this.logger.log(`Registered user ${user.id} (${user.email})`);
    return this.toUserResponse(user);
  }

  async getUserProfile(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User ${userId} not found`);
    }
    return this.toUserResponse(user);
  }

  async listUsers(limit = 50, offset = 0) {
    const [users, count] = await Promise.all([
      this.prisma.user.findMany({ take: limit, skip: offset, orderBy: { createdAt: 'desc' } }),
      this.prisma.user.count(),
    ]);

    return {
      total: count,
      items: users.map(this.toUserResponse),
    };
  }

  private toUserResponse(user: any) {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      kycStatus: user.kycStatus,
      kycTier: user.kycTier,
      createdAt: user.createdAt.toISOString(),
    };
  }
}

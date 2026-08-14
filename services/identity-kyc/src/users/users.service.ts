import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { KycStatus, User } from '../generated/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(id: string, email: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        id,
        email,
        passwordHash: 'dummy',
        firstName: '',
        lastName: '',
        kycStatus: KycStatus.UNVERIFIED,
      },
    });
  }

  async getUser(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  /**
   * State Machine for KYC transitions.
   * unverified -> pending
   * pending -> verified | rejected
   * verified -> expired -> (which goes back to pending)
   * expired | rejected -> pending
   */
  async updateKycStatus(userId: string, newStatus: KycStatus): Promise<User> {
    const user = await this.getUser(userId);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    const currentStatus = user.kycStatus;

    // Validate transition
    const validTransitions: Record<KycStatus, KycStatus[]> = {
      [KycStatus.UNVERIFIED]: [KycStatus.PENDING],
      [KycStatus.PENDING]: [KycStatus.VERIFIED, KycStatus.REJECTED],
      [KycStatus.VERIFIED]: [KycStatus.UNVERIFIED], // fallback for expiration since no EXPIRED state exists in schema yet
      [KycStatus.REJECTED]: [KycStatus.PENDING], // Allow re-verification
    };

    const allowedNextStates = validTransitions[currentStatus] || [];

    if (!allowedNextStates.includes(newStatus)) {
      throw new BadRequestException(
        `Invalid KYC transition from ${currentStatus} to ${newStatus}`,
      );
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: { kycStatus: newStatus },
    });
  }
}

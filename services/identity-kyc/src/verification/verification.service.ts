import { Injectable, BadRequestException, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SubmitKycDto, KycDecisionDto } from './dto/verification.dto';
import { KycStatus, KycTier, KYC_TRANSITIONS } from '@hybrid-banking/types';

@Injectable()
export class VerificationService {
  private readonly logger = new Logger(VerificationService.name);

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Submit KYC verification documents.
   * State Machine: UNVERIFIED / REJECTED / EXPIRED -> PENDING
   */
  async submitVerification(dto: SubmitKycDto) {
    const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
    if (!user) {
      throw new NotFoundException(`User ${dto.userId} not found`);
    }

    const currentStatus = user.kycStatus as KycStatus;
    const allowed = KYC_TRANSITIONS[currentStatus] || [];

    if (!allowed.includes(KycStatus.PENDING)) {
      throw new BadRequestException(
        `Cannot submit KYC from state ${currentStatus}. Allowed transitions from ${currentStatus}: [${allowed.join(', ')}]`,
      );
    }

    const result = await this.prisma.$transaction(async (tx) => {
      const verification = await tx.kycVerification.create({
        data: {
          userId: dto.userId,
          documentType: dto.documentType,
          documentNumber: dto.documentNumber,
          documentCountry: dto.documentCountry,
          selfieUrl: dto.selfieUrl,
          documentFrontUrl: dto.documentFrontUrl,
          documentBackUrl: dto.documentBackUrl,
          status: KycStatus.PENDING as any,
        },
      });

      await tx.user.update({
        where: { id: dto.userId },
        data: { kycStatus: KycStatus.PENDING as any },
      });

      await tx.kycAuditLog.create({
        data: {
          userId: dto.userId,
          action: 'KYC_SUBMITTED',
          fromState: currentStatus as any,
          toState: KycStatus.PENDING as any,
          reason: 'Document submission received',
          performedBy: dto.userId,
        },
      });

      return verification;
    });

    this.logger.log(`KYC submitted for user ${dto.userId}, verification ID ${result.id}`);
    return this.toResponse(result);
  }

  /**
   * Process decision on KYC submission (Admin / Provider Callback).
   * State Machine: PENDING -> VERIFIED or REJECTED
   */
  async processDecision(dto: KycDecisionDto) {
    const verification = await this.prisma.kycVerification.findUnique({
      where: { id: dto.verificationId },
      include: { user: true },
    });

    if (!verification) {
      throw new NotFoundException(`Verification ${dto.verificationId} not found`);
    }

    const currentStatus = verification.user.kycStatus as KycStatus;
    const nextStatus = dto.decision === 'VERIFIED' ? KycStatus.VERIFIED : KycStatus.REJECTED;
    const allowed = KYC_TRANSITIONS[currentStatus] || [];

    if (!allowed.includes(nextStatus)) {
      throw new BadRequestException(
        `Invalid transition from ${currentStatus} to ${nextStatus}`,
      );
    }

    const nextTier = nextStatus === KycStatus.VERIFIED ? KycTier.FULL : KycTier.NONE;

    const updated = await this.prisma.$transaction(async (tx) => {
      const updatedVerif = await tx.kycVerification.update({
        where: { id: dto.verificationId },
        data: {
          status: nextStatus as any,
          decision: dto.decision,
          decisionReason: dto.reason,
          decidedBy: dto.decidedBy,
          providerResponse: dto.providerResponse as any,
        },
      });

      await tx.user.update({
        where: { id: verification.userId },
        data: {
          kycStatus: nextStatus as any,
          kycTier: nextTier,
        },
      });

      await tx.kycAuditLog.create({
        data: {
          userId: verification.userId,
          action: `KYC_${dto.decision}`,
          fromState: currentStatus as any,
          toState: nextStatus as any,
          reason: dto.reason,
          performedBy: dto.decidedBy,
        },
      });

      return updatedVerif;
    });

    this.logger.log(`KYC ${dto.decision} for user ${verification.userId}`);
    return this.toResponse(updated);
  }

  /**
   * Internal status check service endpoint.
   */
  async getStatus(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User ${userId} not found`);
    }

    const verifications = await this.prisma.kycVerification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    return {
      userId: user.id,
      kycStatus: user.kycStatus,
      kycTier: user.kycTier,
      latestVerification: verifications[0] ? this.toResponse(verifications[0]) : null,
      history: verifications.map(this.toResponse),
    };
  }

  private toResponse(v: any) {
    return {
      id: v.id,
      userId: v.userId,
      status: v.status,
      documentType: v.documentType,
      documentCountry: v.documentCountry,
      decision: v.decision,
      decisionReason: v.decisionReason,
      createdAt: v.createdAt.toISOString(),
    };
  }
}

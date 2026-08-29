import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EvaluationService {
  private readonly logger = new Logger(EvaluationService.name);

  constructor(private readonly prisma: PrismaService) {}

  async evaluateTransaction(dto: {
    userId: string;
    action: string;
    amount: string; // BigInt string
    currency: string;
    ipAddress?: string;
  }) {
    const amountBigInt = BigInt(dto.amount);
    let riskScore = 0;
    const reasons: string[] = [];

    // Rule 1: High value transfer threshold ($10,000 equivalent)
    if (amountBigInt > 1000000n) {
      riskScore += 40;
      reasons.push('High value transaction > $10,000');
    }

    // Rule 2: Daily velocity limit check
    const userLimits = await this.prisma.riskLimit.findUnique({
      where: { userId: dto.userId },
    });

    const maxDaily = userLimits?.dailyLimit || 5000000n; // Default $50,000
    const currentDaily = userLimits?.currentDaily || 0n;

    if (currentDaily + amountBigInt > maxDaily) {
      riskScore += 60;
      reasons.push(`Exceeds daily velocity limit of ${(Number(maxDaily)/100).toFixed(2)}`);
    }

    let decision = 'ALLOW';
    if (riskScore >= 80) {
      decision = 'BLOCK';
    } else if (riskScore >= 40) {
      decision = 'REQUIRE_MFA';
    }

    const evaluation = await this.prisma.riskEvaluation.create({
      data: {
        userId: dto.userId,
        action: dto.action,
        amount: amountBigInt,
        currency: dto.currency,
        score: riskScore,
        decision,
        reasons,
      },
    });

    this.logger.log(`Risk eval for user ${dto.userId}: score=${riskScore}, decision=${decision}`);
    return {
      evaluationId: evaluation.id,
      score: riskScore,
      decision,
      reasons,
    };
  }
}

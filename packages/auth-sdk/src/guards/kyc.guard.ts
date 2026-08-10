import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { KycTier, KycStatus } from '@hybrid-banking/types';
import { REQUIRE_KYC_KEY } from '../decorators/require-kyc.decorator';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

const TIER_HIERARCHY: Record<KycTier, number> = {
  [KycTier.NONE]: 0,
  [KycTier.BASIC]: 1,
  [KycTier.FULL]: 2,
  [KycTier.BUSINESS]: 3,
};

@Injectable()
export class KycGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredTier = this.reflector.getAllAndOverride<KycTier>(REQUIRE_KYC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredTier) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;

    if (!user) {
      throw new ForbiddenException('Authentication required for KYC check');
    }

    if (user.kycStatus !== KycStatus.VERIFIED) {
      throw new ForbiddenException(
        `KYC verification required. Current status: ${user.kycStatus}`,
      );
    }

    if (TIER_HIERARCHY[user.kycTier] < TIER_HIERARCHY[requiredTier]) {
      throw new ForbiddenException(
        `KYC tier ${requiredTier} required. Current tier: ${user.kycTier}`,
      );
    }

    return true;
  }
}

import { SetMetadata } from '@nestjs/common';
import { KycTier } from '@hybrid-banking/types';

export const REQUIRE_KYC_KEY = 'require_kyc';

/**
 * Require a minimum KYC tier for an endpoint.
 * Usage: @RequireKyc(KycTier.FULL)
 */
export const RequireKyc = (tier: KycTier) => SetMetadata(REQUIRE_KYC_KEY, tier);

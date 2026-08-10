// ─── KYC Verification State Machine ───
export enum KycStatus {
  UNVERIFIED = 'UNVERIFIED',
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED',
}

// ─── KYC Tier (gates feature access) ───
export enum KycTier {
  NONE = 'NONE',         // no verification — view only
  BASIC = 'BASIC',       // email + phone verified — small limits
  FULL = 'FULL',         // full KYC passed — all features
  BUSINESS = 'BUSINESS', // KYB passed — merchant/business features
}

// ─── Valid state transitions ───
export const KYC_TRANSITIONS: Record<KycStatus, KycStatus[]> = {
  [KycStatus.UNVERIFIED]: [KycStatus.PENDING],
  [KycStatus.PENDING]: [KycStatus.VERIFIED, KycStatus.REJECTED],
  [KycStatus.VERIFIED]: [KycStatus.EXPIRED],
  [KycStatus.REJECTED]: [KycStatus.PENDING],   // allow re-submission
  [KycStatus.EXPIRED]: [KycStatus.PENDING],     // allow re-verification
};

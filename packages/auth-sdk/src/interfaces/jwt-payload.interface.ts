import { KycStatus, KycTier, UserRole } from '@hybrid-banking/types';

export interface JwtPayload {
  sub: string;           // user ID
  email: string;
  role: UserRole;
  kycStatus: KycStatus;
  kycTier: KycTier;
  sessionId: string;
  mfaVerified: boolean;
  iat?: number;
  exp?: number;
}

export interface AuthModuleOptions {
  jwtSecret: string;
  jwtExpiresIn?: string;
  jwtRefreshExpiresIn?: string;
}

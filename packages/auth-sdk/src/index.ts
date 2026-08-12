// Auth SDK
// Handles token validation, generation, and step-up auth for sensitive actions.

export * from './auth.module';
export * from './guards/jwt-auth.guard';
export * from './interfaces/jwt-payload.interface';


export enum RiskLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface AuthPayload {
  userId: string;
  kycStatus: string;
  riskLevel: RiskLevel;
  mfaEnabled: boolean;
  // Scopes/Roles
  roles: string[];
}

export class AuthClient {
  constructor(private readonly jwtSecret: string) {}

  /**
   * Validates a JWT token and returns the parsed payload.
   * Throws an error if expired or invalid.
   */
  verifyToken(token: string): AuthPayload {
    const jwt = require('jsonwebtoken');
    try {
      return jwt.verify(token, this.jwtSecret) as AuthPayload;
    } catch (e) {
      throw new Error('Invalid or expired token');
    }
  }

  /**
   * Checks if an action requires step-up authentication.
   * 
   * Actions like adding a withdrawal address or making a large P2P send
   * should prompt for MFA even if the session is currently valid.
   */
  requiresStepUpAuth(action: string, payload: AuthPayload): boolean {
    const sensitiveActions = [
      'add_withdrawal_address',
      'large_p2p_transfer',
      'change_recovery_contact',
    ];
    
    if (sensitiveActions.includes(action)) {
      // In a real implementation, we'd check if the token includes a recent
      // amr (Authentication Methods References) claim showing fresh MFA.
      return true; 
    }
    
    return false;
  }
}

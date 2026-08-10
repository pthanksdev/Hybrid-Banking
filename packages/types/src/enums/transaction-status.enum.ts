// ─── Generic Transaction Status (payments, P2P, wallet sends) ───
export enum TransactionStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SETTLED = 'SETTLED',
  FAILED = 'FAILED',
  REVERSED = 'REVERSED',
  CANCELLED = 'CANCELLED',
}

// ─── Payment Rail ───
export enum PaymentRail {
  ACH = 'ACH',
  WIRE = 'WIRE',
  CARD = 'CARD',
  INTERNAL = 'INTERNAL',      // on-platform transfer
  ONCHAIN = 'ONCHAIN',        // blockchain transaction
}

// ─── P2P Transfer Type ───
export enum P2pTransferType {
  SEND = 'SEND',
  REQUEST = 'REQUEST',
  SPLIT = 'SPLIT',
}

// ─── Blockchain Transaction Status ───
export enum ChainTxStatus {
  BROADCAST = 'BROADCAST',
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  FAILED = 'FAILED',
  REPLACED = 'REPLACED',
}

// ─── Wallet Type ───
export enum WalletType {
  CUSTODIAL = 'CUSTODIAL',
  NON_CUSTODIAL = 'NON_CUSTODIAL',
}

// ─── Wallet Tier ───
export enum WalletTier {
  HOT = 'HOT',
  WARM = 'WARM',
  COLD = 'COLD',
}

// ─── Risk Level ───
export enum RiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

// ─── Notification Channel ───
export enum NotificationChannel {
  PUSH = 'PUSH',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
}

// ─── Notification Priority ───
export enum NotificationPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',       // transactional — guaranteed delivery
  CRITICAL = 'CRITICAL', // security alerts — immediate + multi-channel
}

// ─── DeFi Position Type ───
export enum DefiPositionType {
  SWAP = 'SWAP',
  STAKE = 'STAKE',
  LP = 'LP',
  BRIDGE = 'BRIDGE',
}

// ─── Account State ───
export enum AccountState {
  ACTIVE = 'ACTIVE',
  FROZEN = 'FROZEN',
  CLOSED = 'CLOSED',
  PENDING_CLOSURE = 'PENDING_CLOSURE',
}

// ─── User Role ───
export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPPORT = 'SUPPORT',
  COMPLIANCE = 'COMPLIANCE',
  ENGINEER = 'ENGINEER',
}

import { z } from 'zod';

const bigintString = z.string().transform((val) => BigInt(val));

// ─── Initiate Payment ───
export const InitiatePaymentSchema = z.object({
  idempotencyKey: z.string().min(1).max(255),
  fromAccountId: z.string().cuid(),
  amount: bigintString,
  currency: z.string().min(1).max(10),
  rail: z.enum(['ACH', 'WIRE', 'CARD', 'INTERNAL']),
  toExternalAccount: z.object({
    routingNumber: z.string().optional(),
    accountNumber: z.string().optional(),
    bankName: z.string().optional(),
  }).optional(),
  toInternalAccountId: z.string().cuid().optional(),
  description: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
});

// ─── P2P Send ───
export const P2pSendSchema = z.object({
  idempotencyKey: z.string().min(1).max(255),
  fromAccountId: z.string().cuid(),
  recipientHandle: z.string().min(1), // username, phone, email
  amount: bigintString,
  currency: z.string().default('USD'),
  note: z.string().max(500).optional(),
});

// ─── P2P Request Money ───
export const P2pRequestSchema = z.object({
  requesterId: z.string().cuid(),
  recipientHandle: z.string().min(1),
  amount: bigintString,
  currency: z.string().default('USD'),
  note: z.string().max(500).optional(),
  expiresAt: z.string().datetime().optional(),
});

// ─── Wallet Withdrawal ───
export const WalletWithdrawalSchema = z.object({
  idempotencyKey: z.string().min(1).max(255),
  walletId: z.string().cuid(),
  toAddress: z.string().min(1),
  amount: bigintString,
  currency: z.string(),
  chain: z.string(),
  feeLevel: z.enum(['SLOW', 'STANDARD', 'FAST']).default('STANDARD'),
});

// ─── Risk Score Request ───
export const RiskScoreRequestSchema = z.object({
  userId: z.string().cuid(),
  action: z.string(),
  amount: bigintString.optional(),
  currency: z.string().optional(),
  deviceFingerprint: z.string().optional(),
  ipAddress: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
});

// ─── Send Notification ───
export const SendNotificationSchema = z.object({
  userId: z.string().cuid(),
  channel: z.enum(['PUSH', 'EMAIL', 'SMS']),
  templateId: z.string(),
  data: z.record(z.unknown()).optional(),
  priority: z.enum(['LOW', 'NORMAL', 'HIGH', 'CRITICAL']).default('NORMAL'),
});

export type InitiatePayment = z.infer<typeof InitiatePaymentSchema>;
export type P2pSend = z.infer<typeof P2pSendSchema>;
export type P2pRequest = z.infer<typeof P2pRequestSchema>;
export type WalletWithdrawal = z.infer<typeof WalletWithdrawalSchema>;
export type RiskScoreRequest = z.infer<typeof RiskScoreRequestSchema>;
export type SendNotification = z.infer<typeof SendNotificationSchema>;

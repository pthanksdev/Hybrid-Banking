import { z } from 'zod';

// ─── BigInt-safe schema (JSON sends strings for BigInt) ───
const bigintString = z.string().transform((val) => BigInt(val));

// ─── Create Ledger Entry ───
export const CreateLedgerEntrySchema = z.object({
  accountId: z.string().cuid(),
  amount: bigintString,
  currency: z.string().min(1).max(10),
  description: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
});

// ─── Post Transaction (array of balanced entries) ───
export const PostTransactionSchema = z.object({
  idempotencyKey: z.string().min(1).max(255),
  entries: z.array(CreateLedgerEntrySchema).min(2),
  description: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
});

// ─── Create Ledger Account ───
export const CreateLedgerAccountSchema = z.object({
  name: z.string().min(1).max(255),
  type: z.enum(['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE']),
  currency: z.string().min(1).max(10),
  metadata: z.record(z.unknown()).optional(),
});

// ─── Balance Query ───
export const BalanceQuerySchema = z.object({
  accountId: z.string().cuid(),
  asOf: z.string().datetime().optional(), // point-in-time query
  currency: z.string().optional(),
});

export type CreateLedgerEntry = z.infer<typeof CreateLedgerEntrySchema>;
export type PostTransaction = z.infer<typeof PostTransactionSchema>;
export type CreateLedgerAccount = z.infer<typeof CreateLedgerAccountSchema>;
export type BalanceQuery = z.infer<typeof BalanceQuerySchema>;

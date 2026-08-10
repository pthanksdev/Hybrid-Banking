import { z } from 'zod';

// ─── Create Account ───
export const CreateAccountSchema = z.object({
  userId: z.string().cuid(),
  type: z.enum(['CHECKING', 'SAVINGS', 'BUSINESS', 'MERCHANT']),
  currency: z.string().default('USD'),
  name: z.string().min(1).max(100).optional(),
});

// ─── Account Freeze ───
export const FreezeAccountSchema = z.object({
  reason: z.string().min(1).max(500),
  frozenBy: z.string().cuid(),
});

// ─── Account Close ───
export const CloseAccountSchema = z.object({
  reason: z.string().min(1).max(500),
  payoutAccountId: z.string().cuid().optional(), // where to send remaining balance
});

export type CreateAccount = z.infer<typeof CreateAccountSchema>;
export type FreezeAccount = z.infer<typeof FreezeAccountSchema>;
export type CloseAccount = z.infer<typeof CloseAccountSchema>;

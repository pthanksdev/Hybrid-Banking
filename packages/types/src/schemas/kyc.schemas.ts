import { z } from 'zod';

// ─── User Registration ───
export const RegisterUserSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(10).max(15).optional(),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  dateOfBirth: z.string().datetime().optional(),
  country: z.string().length(2).optional(), // ISO 3166-1 alpha-2
});

// ─── Submit KYC Verification ───
export const SubmitKycSchema = z.object({
  userId: z.string().cuid(),
  documentType: z.enum(['PASSPORT', 'DRIVERS_LICENSE', 'NATIONAL_ID']),
  documentNumber: z.string().min(1),
  documentCountry: z.string().length(2),
  selfieUrl: z.string().url().optional(),
  documentFrontUrl: z.string().url(),
  documentBackUrl: z.string().url().optional(),
});

// ─── KYC Decision (admin/automated) ───
export const KycDecisionSchema = z.object({
  userId: z.string().cuid(),
  decision: z.enum(['VERIFIED', 'REJECTED']),
  reason: z.string().min(1).max(1000),
  decidedBy: z.string(), // system or admin user ID
  providerResponse: z.record(z.unknown()).optional(),
});

export type RegisterUser = z.infer<typeof RegisterUserSchema>;
export type SubmitKyc = z.infer<typeof SubmitKycSchema>;
export type KycDecision = z.infer<typeof KycDecisionSchema>;

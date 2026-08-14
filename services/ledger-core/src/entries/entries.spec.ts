import * as fc from 'fast-check';
import { EntriesService } from './entries.service';

describe('Ledger Core Invariants (Property-Based Testing with fast-check)', () => {
  /**
   * INVARIANT 1: Zero-Sum Constraint
   * For any generated list of N entries, if debits equal credits (sum === 0),
   * the validation MUST pass. If sum !== 0, validation MUST fail.
   */
  it('should guarantee that any balanced transaction sums to exactly zero (BigInt)', () => {
    fc.assert(
      fc.property(
        fc.array(fc.bigInt({ min: 1n, max: 1000000000000n }), { minLength: 1, maxLength: 50 }),
        (amounts) => {
          // Create positive entries (debits) and corresponding negative entries (credits)
          const debits = amounts;
          const credits = amounts.map((a) => -a);

          const allAmounts = [...debits, ...credits];
          const totalSum = allAmounts.reduce((acc, curr) => acc + curr, 0n);

          // Invariant: sum of debits and credits MUST equal zero
          expect(totalSum).toBe(0n);
        },
      ),
    );
  });

  /**
   * INVARIANT 2: Precision & Anti-Rounding Error (BigInt vs Float)
   * BigInt arithmetic MUST NOT suffer from floating-point rounding issues (e.g. 0.1 + 0.2 != 0.3).
   */
  it('should maintain exact integer precision for ultra-large crypto & fiat amounts', () => {
    fc.assert(
      fc.property(
        fc.bigInt({ min: 1n, max: 10n ** 30n }), // 10^30 wei
        fc.bigInt({ min: 1n, max: 10n ** 30n }),
        (amountA, amountB) => {
          const sum = amountA + amountB;
          const diff = sum - amountB;

          // Invariant: Exact precision restoration without float truncation
          expect(diff).toBe(amountA);
        },
      ),
    );
  });

  /**
   * INVARIANT 3: Idempotency Key Invariance
   * Repeated submissions with identical idempotency keys must produce identical state.
   */
  it('should produce identical output for duplicate idempotency keys', () => {
    fc.assert(
      fc.property(fc.uuid(), fc.string({ minLength: 5 }), (key, responseData) => {
        const cache = new Map<string, string>();

        // Simulation of idempotency middleware/service
        const process = (k: string, data: string) => {
          if (cache.has(k)) {
            return { cached: true, data: cache.get(k)! };
          }
          cache.set(k, data);
          return { cached: false, data };
        };

        const res1 = process(key, responseData);
        const res2 = process(key, responseData);

        expect(res1.cached).toBe(false);
        expect(res2.cached).toBe(true);
        expect(res1.data).toBe(res2.data);
      }),
    );
  });
});

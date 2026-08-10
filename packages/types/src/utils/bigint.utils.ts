/**
 * Serialize BigInt values to strings for JSON transport.
 * JSON.stringify cannot handle BigInt natively.
 */
export function serializeBigInt(obj: unknown): unknown {
  if (typeof obj === 'bigint') {
    return obj.toString();
  }
  if (Array.isArray(obj)) {
    return obj.map(serializeBigInt);
  }
  if (obj !== null && typeof obj === 'object') {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = serializeBigInt(value);
    }
    return result;
  }
  return obj;
}

/**
 * Parse a string amount to BigInt (smallest unit).
 * E.g., "1000" → 1000n (representing $10.00 in cents)
 */
export function parseBigInt(value: string | number | bigint): bigint {
  if (typeof value === 'bigint') return value;
  if (typeof value === 'number') return BigInt(Math.floor(value));
  return BigInt(value);
}

/**
 * Format BigInt amount to human-readable with decimals.
 * E.g., 1000n with 2 decimals → "10.00"
 */
export function formatAmount(amount: bigint, decimals: number = 2): string {
  const divisor = BigInt(10 ** decimals);
  const whole = amount / divisor;
  const fraction = amount % divisor;
  const fractionStr = fraction.toString().padStart(decimals, '0');
  return `${whole}.${fractionStr}`;
}

/**
 * Custom JSON replacer that converts BigInt to string.
 */
export function bigIntReplacer(_key: string, value: unknown): unknown {
  if (typeof value === 'bigint') {
    return value.toString();
  }
  return value;
}

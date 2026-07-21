export function retryDelayMilliseconds(
  attempt: number,
  retryAfterMilliseconds: number | null,
): number {
  if (!Number.isSafeInteger(attempt) || attempt < 1) {
    throw new RangeError("attempt must be a positive integer");
  }
  if (retryAfterMilliseconds !== null) {
    return Math.max(0, Math.min(retryAfterMilliseconds, 30_000));
  }
  return Math.min(500 * 2 ** (attempt - 1), 30_000);
}

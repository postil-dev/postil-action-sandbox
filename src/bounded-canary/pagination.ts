export function pageSlice<T>(
  values: readonly T[],
  page: number,
  pageSize: number,
): readonly T[] {
  if (!Number.isSafeInteger(page) || page < 1) {
    throw new RangeError("page must be a positive integer");
  }
  if (!Number.isSafeInteger(pageSize) || pageSize < 1 || pageSize > 100) {
    throw new RangeError("page size is outside the supported range");
  }
  const start = (page - 1) * pageSize;
  return values.slice(start, start + pageSize);
}

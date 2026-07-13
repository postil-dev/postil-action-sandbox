# postil-action-sandbox

Fixture repository for exercising the [Postil Action](https://github.com/postil-dev/postil-action).

This repository intentionally includes realistic but harmless bugs so that every PR gives the action something to comment on. Do not use this code in production.

## Intentional review signals

- **Unused import**: `writeFileSync` is imported but never used (`src/index.ts`).
- **Off-by-one error**: `sumArray` iterates one index past the end of the array (`src/index.ts`).
- **Unhandled promise**: `fetchData` fires a `fetch` without awaiting or catching rejections (`src/index.ts`).
- **Wrong unit conversion**: `applyDiscount` treats `discountPct` as already-fractional instead of a whole-number percentage (`src/cart.ts`).
- **Off-by-length string bug**: `truncate` appends `"..."` after slicing to `max`, so the result exceeds `max` characters (`src/formatting.ts`).
- **Truncation vs. flooring**: `bucketize` uses `int()` to derive a bucket key, which truncates toward zero and misbuckets negative values (`scripts/report.py`).

## CI

`.github/workflows/postil-review.yml` runs on pull-request changes when the repository variable `POSTIL_SANDBOX_ENABLED` is `true`. It reads the model credential from the `OPENROUTER_API_KEY` repository secret. Without the opt-in variable, the fixture job is skipped.

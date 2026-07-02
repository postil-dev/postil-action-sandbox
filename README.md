# postil-action-sandbox

Fixture repo for exercising the [postil](https://github.com/postil-dev/postil) AI pull-request reviewer.

This repository intentionally includes realistic but harmless bugs so that every PR gives the action something to comment on. Do not use this code in production.

## Intentional review signals

- **Unused import**: `writeFileSync` is imported but never used (`src/index.ts`).
- **Off-by-one error**: `sumArray` iterates one index past the end of the array (`src/index.ts`).
- **Unhandled promise**: `fetchData` fires a `fetch` without awaiting or catching rejections (`src/index.ts`).
- **Wrong unit conversion**: `applyDiscount` treats `discountPct` as already-fractional instead of a whole-number percentage (`src/cart.ts`).
- **Off-by-length string bug**: `truncate` appends `"..."` after slicing to `max`, so the result exceeds `max` characters (`src/formatting.ts`).
- **Truncation vs. flooring**: `bucketize` uses `int()` to derive a bucket key, which truncates toward zero and misbuckets negative values (`scripts/report.py`).

## CI

`.github/workflows/postil-review.yml` runs [postil-action](https://github.com/postil-dev/postil-action) on every pull request. It only runs when the repo variable `POSTIL_SANDBOX_ENABLED` is set to `true`, and needs an `OPENROUTER_API_KEY` repo secret to actually call a model; without both, the workflow skips instead of failing every PR check.

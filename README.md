# postil-action-sandbox

Fixture repository for testing the [Postil Action](https://github.com/postil-dev/postil-action) against known defects.

This repository contains realistic but harmless review fixtures. Pull requests that introduce or touch these signals give the action known defects to inspect. Do not use this code in production.

## Intentional review signals

- **Unused import**: `writeFileSync` is imported but never used (`src/index.ts`).
- **Off-by-one error**: `sumArray` iterates one index past the end of the array (`src/index.ts`).
- **Unhandled promise**: `fetchData` fires a `fetch` without awaiting or catching rejections (`src/index.ts`).
- **Wrong unit conversion**: `applyDiscount` treats `discountPct` as already-fractional instead of a whole-number percentage (`src/cart.ts`).
- **Off-by-length string bug**: `truncate` appends `"..."` after slicing to `max`, so the result exceeds `max` characters (`src/formatting.ts`).
- **Truncation vs. flooring**: `bucketize` uses `int()` to derive a bucket key, which truncates toward zero and misbuckets negative values (`scripts/report.py`).

## CI

The hosted GitHub App owns automatic pull-request reviews. The manual `Postil Action smoke review` workflow accepts a pull-request number and exercises this repository through `postil-action` with the `OPENROUTER_API_KEY` repository secret, without adding a permanently skipped check to every pull request.

Documentation-only pull requests provide harmless inputs for validating the hosted review path.

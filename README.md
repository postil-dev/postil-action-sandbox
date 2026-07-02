# postil-action-sandbox

Fixture repo for exercising the [postil](https://github.com/postil-dev/postil) AI pull-request reviewer.

This repository intentionally includes realistic but harmless bugs so that every PR gives the action something to comment on. Do not use this code in production.

## Intentional review signals

- **Unused import**: `writeFileSync` is imported but never used.
- **Off-by-one error**: `sumArray` iterates one index past the end of the array.
- **Unhandled promise**: `fetchData` fires a `fetch` without awaiting or catching rejections.

## CI

`.github/workflows/postil-review.yml` runs [postil-action](https://github.com/postil-dev/postil-action) on every pull request. It only runs when the repo variable `POSTIL_SANDBOX_ENABLED` is set to `true`, and needs an `OPENROUTER_API_KEY` repo secret to actually call a model; without both, the workflow skips instead of failing every PR check.

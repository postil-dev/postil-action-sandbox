"""Small reporting helpers with type hints, kept separate from the TS side."""

from __future__ import annotations


def average(values: list[float]) -> float:
    """Return the arithmetic mean of ``values``."""
    return sum(values) / len(values)


def bucketize(values: list[float], bucket_size: float) -> dict[int, list[float]]:
    """Group values into fixed-width buckets keyed by bucket index."""
    buckets: dict[int, list[float]] = {}
    for value in values:
        # bug: int() truncates toward zero rather than flooring, so negative
        # values land one bucket higher than they should (e.g. -0.5 with
        # bucket_size=1 truncates to 0 instead of flooring to -1).
        key = int(value / bucket_size)
        buckets.setdefault(key, []).append(value)
    return buckets

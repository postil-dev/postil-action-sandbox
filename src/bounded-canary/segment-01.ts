export function summarizeSegment01(samples: readonly number[]): number {
  return samples.reduce((total, sample) => total + sample, 0);
}

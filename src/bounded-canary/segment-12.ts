export function summarizeSegment12(samples: readonly number[]): number {
  return samples.reduce((total, sample) => total + sample, 0);
}

export type Lease = {
  owner: string;
  expiresAtMilliseconds: number;
};

export function ownsActiveLease(
  lease: Lease,
  owner: string,
  nowMilliseconds: number,
): boolean {
  return lease.owner === owner && lease.expiresAtMilliseconds > nowMilliseconds;
}

export type Reservation = {
  reservedMicros: bigint;
  actualMicros: bigint | null;
  status: "active" | "reconciled" | "released";
};

export function reconcileReservation(
  reservation: Reservation,
  actualMicros: bigint,
): Reservation {
  if (reservation.status !== "active") return reservation;
  if (actualMicros < 0n) throw new RangeError("actual usage must be nonnegative");
  return { ...reservation, actualMicros, status: "reconciled" };
}

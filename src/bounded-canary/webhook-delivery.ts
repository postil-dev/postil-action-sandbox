export function normalizeDeliveryId(value: string): string {
  const normalized = value.trim().toLowerCase();
  if (!/^[0-9a-f-]{16,64}$/.test(normalized)) {
    throw new TypeError("invalid delivery identifier");
  }
  return normalized;
}

export function deliveryKey(event: string, deliveryId: string): string {
  return `${event.trim().toLowerCase()}:${normalizeDeliveryId(deliveryId)}`;
}

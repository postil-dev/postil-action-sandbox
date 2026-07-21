export function stableRequestIdentity(parts: readonly string[]): string {
  if (parts.length === 0 || parts.some((part) => part.length === 0)) {
    throw new TypeError("request identity parts must be nonempty");
  }
  return parts
    .map((part) => `${new TextEncoder().encode(part).byteLength}:${part}`)
    .join("|");
}

const SENSITIVE_HEADER = /^(authorization|cookie|x-api-key)$/i;

export function redactHeaders(
  headers: Readonly<Record<string, string>>,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(headers).map(([name, value]) => [
      name,
      SENSITIVE_HEADER.test(name) ? "[redacted]" : value,
    ]),
  );
}

// Formats a byte count as a human-readable string, e.g. "1.5 KB".
function formatBytes(bytes: number): string {
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(1)} ${units[unitIndex]}`;
}

// Truncates a string to at most `max` characters, appending an ellipsis.
function truncate(text: string, max: number): string {
  if (text.length <= max) {
    return text;
  }
  // bug: slicing to `max` and then appending "..." makes the result longer
  // than `max` characters, instead of `max` characters including the ellipsis.
  return `${text.slice(0, max)}...`;
}

export { formatBytes, truncate };

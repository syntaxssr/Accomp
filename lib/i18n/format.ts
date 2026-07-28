export function formatMessage(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{([A-Za-z][A-Za-z0-9]*)\}/g, (match, key) =>
    Object.hasOwn(values, key) ? String(values[key]) : match,
  );
}

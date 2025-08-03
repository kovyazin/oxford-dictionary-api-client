const parseValue = (value: unknown) => {
  return Array.isArray(value) ? value.join(",") : String(value);
};

export const buildQueryString = (options: Record<string, unknown> = {}) => {
  const entries = Object.entries(options)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, parseValue(value)]);

  return new URLSearchParams(entries).toString();
};

export const concatPathAndQueryString = (
  path: string,
  queryString?: string
) => {
  return queryString ? `${path}?${queryString}` : path;
};

export const buildPath = (parts: (string | undefined)[]) => {
  const idx = parts.findIndex(part => !part);
  const filteredParts = idx === -1 ? parts : parts.slice(0, idx);
  return filteredParts.join("/");
};

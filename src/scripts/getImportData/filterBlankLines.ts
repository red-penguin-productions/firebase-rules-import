export const filterBlankLines = (value: string[]): string[] =>
  value.map((v) => v.trim()).filter((v) => v.length > 0);

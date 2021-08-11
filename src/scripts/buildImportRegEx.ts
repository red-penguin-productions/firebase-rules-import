export const buildImportRegEx = (key: string) =>
  // eslint-disable-next-line no-octal-escape
  new RegExp(`${key} (["'])(.*)${"\\"}1;`, "gm");

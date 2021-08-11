import { isImport } from "./isImport";

export const hasImports = (array: string[], key: string): boolean => {
  return (
    array.filter((value) => {
      return isImport(value, key);
    }).length > 0
  );
};

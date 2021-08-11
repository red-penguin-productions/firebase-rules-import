import { Stats } from "fs";

export const getFilePath = (check: Stats, path: string): string => {
  if (check.isDirectory()) {
    const trailingSlash = path.slice(-1) === "/" ? "" : "/";
    return `${path}${trailingSlash}index.rules`;
  }
  return path;
};

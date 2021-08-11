import { dirname } from "path";
import { buildPath } from "./buildPath";
import { Configuration } from "./getConfiguration";
import { readFile } from "./readFile";
import { isImport } from "./isImport";
import { hasImports } from "./hasImports";
import { buildImportRegEx } from "./buildImportRegEx";
import { flattenDeep } from "lodash";

export const processFile = async (
  config: Configuration,
  path: string
): Promise<string[]> => {
  const { key } = config;
  const loc = await readFile(path);

  if (hasImports(loc, key)) {
    const importRegex = buildImportRegEx(key);
    const dir = dirname(path);

    const result: Array<string | string[]> = await Promise.all(
      loc.map(async (value): Promise<string | string[]> => {
        if (isImport(value, key)) {
          importRegex.lastIndex = 0;
          const m = importRegex.exec(value);
          if (m) {
            const newFile = `${dir}/${m[2]}`;

            const newLines = await buildPath(config, newFile);
            return newLines;
          }
          return Promise.reject(
            new Error("Import statement error, unable to pass:" + value)
          );
        }
        return value;
      })
    );
    return flattenDeep(result);
  }

  return loc;
};

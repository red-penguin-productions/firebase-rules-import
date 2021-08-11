import { promises as fs } from "fs";
import { Configuration } from "./getConfiguration";
import { getFilePath } from "./getFilePath";
import { processFile } from "./processFile";

export const buildPath = async (
  config: Configuration,
  path?: string
): Promise<string[]> => {
  const { main } = config;
  const p = path ? path : main;
  const pathStats = await fs.stat(p);
  const builtPath = getFilePath(pathStats, p);
  return processFile(config, builtPath);
};

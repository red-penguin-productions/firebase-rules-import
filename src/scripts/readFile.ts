import { promises as fs } from "fs";

export const readFile = async (path: string): Promise<string[]> => {
  const fileContent = (await fs.readFile(path, {
    encoding: "utf-8",
  })) as string;

  return fileContent.split("\n");
};

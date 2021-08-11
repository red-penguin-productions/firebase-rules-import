import { promises as fs } from "fs";

export const writeFile = (output: string, content: string): Promise<void> =>
  fs.writeFile(output, content, "utf8");

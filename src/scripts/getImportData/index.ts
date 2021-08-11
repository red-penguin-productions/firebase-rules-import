import { buildPath } from "./buildPath";
import { filterBlankLines } from "./filterBlankLines";
import { Configuration } from "./getConfiguration";
import { joinLines } from "./joinLines";
import { writeFile } from "./writeFile";

const getImportData = async (config: Configuration): Promise<void> => {
  return buildPath(config)
    .then(filterBlankLines)
    .then(joinLines)
    .then((content) => writeFile(config.output, content));
};

export default getImportData;

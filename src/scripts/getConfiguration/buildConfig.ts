import { ConfigDecoded, ConfigFile } from "./index.types";

type BuildConfig = (args: {
  config: ConfigFile;
  key: string | undefined;
  main: string | undefined;
  output: string | undefined;
}) => ConfigDecoded;

const buildConfig: BuildConfig = ({ config, key, main, output }) => {
  if (key) {
    return { default: { key, main, output } };
  }

  if (config.firestore)

};

export default buildConfig;

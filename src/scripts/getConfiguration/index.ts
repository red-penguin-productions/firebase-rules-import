/**
 * Get the configuration from either:
 *  - package.json (key: "firebase-rules")
 *  - firebase.json
 *  - firebase.rules.config.js
 *
 * See https://github.com/red-penguin-productions/firebase-rules-import for configuration options
 *
 * @return  {Configuration}  Configuration object
 */
type GetConfiguration = (flags: {
  version: void;
  help: void;
  key: string | undefined;
  main: string | undefined;
  output: string | undefined;
}) => Configuration;

export interface Configuration {
  main: string;
  output: string;
  key: string;
}

const getConfiguration: GetConfiguration = (flags) => {
  //TODO: Get configuration from files and replace return
  return {
    main: flags.main ?? "./src/index.rules",
    output: flags.output ?? "./firestore.rules",
    key: flags.key ?? "@import",
  };
};

export default getConfiguration;

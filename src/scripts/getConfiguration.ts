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
type GetConfiguration = () => Configuration;

export interface Configuration {
  main: string;
  output: string;
  key: string;
}

const getConfiguration: GetConfiguration = () => {
  //TODO: Get configuration and replace return
  return {
    main: "./src/index.rules",
    output: "./firestore.rules",
    key: "@import",
  };
};

export default getConfiguration;

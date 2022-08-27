type Key = { key?: string };

//^ Basic Config
export interface Configuration extends ConfigurationInOut {
  key: string;
}
interface ConfigurationOptionalKey extends ConfigurationInOut {
  key?: string;
}
interface ConfigurationInOut {
  main: string;
  output: string;
}

//^ Config File
export type ConfigFile =
  | Configuration
  | MultiConfigurationGlobalKey
  | MultiConfigurationIndiviualKeys;

//^ Multi
interface MultiConfigurationIndiviualKeys {
  firestore?: Configuration;
  storage?:
    | Configuration
    | StorageIndividualKeys
    | StorageIndividualGlobalStorageKey;
}

interface MultiConfigurationGlobalKey {
  key: string;
  firestore?: ConfigurationOptionalKey;
  storage?:
    | ConfigurationOptionalKey
    | StorageIndividualOptionalKeys
    | StorageIndividualGlobalStorageKey;
}

//^ Storage
interface StorageIndividualKeys {
  [bucket: string]: Configuration;
}
interface StorageIndividualOptionalKeys {
  [bucket: string]: ConfigurationOptionalKey;
}

interface StorageIndividualGlobalStorageKey {
  buckets: StorageIndividualOptionalKeys;
  key: string;
}

export interface ConfigDecoded {
  [ruleset: string]: Configuration;
}

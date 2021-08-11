import { Command, flags } from "@oclif/command";
import getConfiguration from "./scripts/getConfiguration";
import getImportData from "./scripts/getImportData";

class RedPenguinProductionsFirebaseRulesImport extends Command {
  static description =
    "Combine rules that have been split into seperate files into a single file that can be uploaded to firebase, works with storage and firestore rules.";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({
      char: "v",
      description: "Show rules-import version",
    }),
    help: flags.help({ char: "h", description: "Show rules-import help" }),
    key: flags.string({
      char: "k",
      description:
        "Key of import statements, overrides configuration files.\nDepends on 'main' and 'key' flags.\nNot compatible with the 'ruleset' or 'config' flags.",
      dependsOn: ["output", "main"],
    }),
    main: flags.string({
      char: "m",
      description:
        "Entry point to rules, overrides configuration files.\nDepends on 'main' and 'key' flags.\nNot compatible with the 'ruleset' or 'config' flags.",
      dependsOn: ["output", "key"],
    }),
    output: flags.string({
      char: "o",
      description:
        "File to output to, overrides configuration files.\nDepends on 'main' and 'key' flags.\nNot compatible with the 'ruleset' or 'config' flags.",
      dependsOn: ["main", "key"],
    }),
    ruleset: flags.string({
      char: "r",
      description:
        "The ruleset that will be created\nThis could be at a:\n - product level (e.g. 'firestore', 'storage')\n - bucket level for storage rules (e.g. 'storage.bucket').\n\nNot compatible with the 'key', 'main' and 'output' flags.",
      multiple: true,
      exclusive: ["output", "main", "key"],
    }),
    config: flags.string({
      char: "c",
      description:
        "Configuration file that replaces the auto find configuration engine.\nNot compatible with the 'key', 'main' and 'output' flags.\nCan be scoped down with the 'ruleset' flag.",
      exclusive: ["output", "main", "key"],
    }),
  };

  static args = [];

  async run() {
    const { flags } = this.parse(RedPenguinProductionsFirebaseRulesImport);
    const config = getConfiguration(flags);

    this.log("configuration", config);
    try {
      await getImportData(config);
      this.log("Rules file created");
    } catch (error) {
      this.error(error);
    }
  }
}

export = RedPenguinProductionsFirebaseRulesImport;

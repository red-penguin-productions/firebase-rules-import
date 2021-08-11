import { Command, flags } from "@oclif/command";
import getConfiguration from "./scripts/getConfiguration";
import getImportData from "./scripts/getImportData";

class RedPenguinProductionsFirebaseRulesImport extends Command {
  static description =
    "Combine rules that have been split into seperate files into a single file that can be uploaded to firebase, works with storage and firestore rules.";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "V" }),
    help: flags.help({ char: "H" }),
    key: flags.string({
      char: "K",
      description: "key of import statements, overrides configuration files",
      dependsOn: ["output", "main"],
    }),
    main: flags.string({
      char: "M",
      description: "entry point to rules, overrides configuration files",
      dependsOn: ["output", "key"],
    }),
    output: flags.string({
      char: "O",
      description: "file to output to, overrides configuration files",
      dependsOn: ["main", "key"],
    }),
    ruleset: flags.string({
      description:
        "The ruleset that will be created, this could be at a product level (e.g. 'firestore', 'storage') or at a bucket level for storage rules (e.g. 'storage.bucket')",
      multiple: true,
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

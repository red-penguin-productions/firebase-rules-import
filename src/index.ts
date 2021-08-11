import { Command, flags } from "@oclif/command";
import getConfiguration from "./scripts/getConfiguration";

class RedPenguinProductionsFirebaseRulesImport extends Command {
  static description =
    "Combine rules that have been split into seperate files into a single file that can be uploaded to firebase, works with storage and firestore rules";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "V" }),
    help: flags.help({ char: "H" }),
    key: flags.string({ char: "K", description: "key of import statements" }),
    main: flags.string({ char: "M", description: "entry point to rules" }),
    output: flags.string({ char: "O", description: "file to output to" }),
  };

  static args = [{ name: "file" }];

  async run() {
    const { flags } = this.parse(RedPenguinProductionsFirebaseRulesImport);
    const config = getConfiguration(flags);

    this.log("configuration", config);
  }
}

export = RedPenguinProductionsFirebaseRulesImport;

import { program } from "commander";

import { check, init } from "../lib";
import { PROJECT_NAME, VERSION } from "../shared";
import { OptionValues } from "../types";

program.helpOption("-h, --help", "Show help");

program
  .option("--init", "initialize package-json-note")
  .option("-c, --check", "validate ")
  .option("--package-json-path", "specify path of package.json");

program
  .version(VERSION, "-v, --version", `Print version of ${PROJECT_NAME}`)
  .name(PROJECT_NAME);

program.on("--help", () => {
  console.log("");
  console.log("Example:");
  console.log(`  $ ${PROJECT_NAME} -c`);
  console.log(`  $ ${PROJECT_NAME} --init`);
});
program.parse(process.argv);

const options = program.opts<OptionValues>();

const main = () => {
  if (options.init) init();
  if (options.check) check();
};
main();

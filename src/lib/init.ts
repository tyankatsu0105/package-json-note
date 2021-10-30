import consola from "consola";
import { writeFileSync } from "fs";

import {
  CONFIG_NAME,
  getFlattenPackageJson,
  getPackageJsonContent,
} from "../shared";

const createConfig = (packageJson: string) => {
  writeFileSync(CONFIG_NAME, packageJson);
};

export const init = () => {
  const packageJson = getPackageJsonContent();
  createConfig(
    createTemplate(
      JSON.stringify(
        getFlattenPackageJson({ newValue: ``, packageJson }),
        null,
        2
      )
    )
  );

  consola.success(`Created ${CONFIG_NAME}`);
};

const createTemplate = (packageJson: string) =>
  `module.exports = ${packageJson}`;

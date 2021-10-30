import consola from "consola";

import {
  getConfig,
  getFlattenPackageJson,
  getPackageJsonContent,
} from "../shared";

export const check = () => {
  const config = getConfig();
  const packageJson = getFlattenPackageJson({
    newValue: ``,
    packageJson: getPackageJsonContent(),
  });
  printDiff({
    correct: packageJson,
    current: config,
  });
};

const printDiff = (params: {
  correct: Record<string, unknown>;
  current: Record<string, unknown>;
}) => {
  const correctKeys = Object.keys(params.correct);
  const currentKeys = Object.keys(params.current);

  const errors = currentKeys.filter(
    (currentKey) => params.correct[currentKey] === undefined
  );
  const warnings = correctKeys.filter(
    (correctKey) => params.current[correctKey] === undefined
  );

  if (errors.length === 0 && warnings.length === 0) {
    consola.success("Clear!!");
    return;
  }

  if (errors.length > 0) {
    consola.error(`These keys does not exist at package.json`);
    for (const error of errors) {
      consola.log(error);
    }
  }
  if (warnings.length > 0) {
    consola.warn(`You can add these keys to note`);
    for (const warning of warnings) {
      consola.log(warning);
    }
  }
};

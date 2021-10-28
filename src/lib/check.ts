import {
  getConfig,
  getFlattenPackageJson,
  getPackageJsonContent,
} from "../shared";

export const check = () => {
  const packageJson = getPackageJsonContent();

  const configKeys = Object.keys(getConfig());
  const packageJsonKeys = Object.keys(
    getFlattenPackageJson({
      newValue: ``,
      packageJson,
    })
  );

  console.log({ configKeys, packageJsonKeys });
};

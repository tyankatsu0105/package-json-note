import { flatten } from "flatten-anything";
import { readFileSync } from "fs";
import { join } from "path";

import { PackageJson } from "../../../types";

export const getPackageJsonContent = () => {
  const packageJson = readFileSync(join(process.cwd(), "package.json"), {
    encoding: "utf8",
  });

  return JSON.parse(packageJson);
};

export const getFlattenPackageJson = (params: {
  newValue: unknown;
  packageJson: PackageJson;
}) => {
  const flattenedObj = flatten(params.packageJson);

  const entries = Object.entries(flattenedObj).map(([key, value]) => {
    let result = {
      [key]: params.newValue,
    };
    if (Array.isArray(value)) {
      const transformedInArray = value.reduce((acc, _, index) => {
        const result = {
          [`${key}.${value[index]}`]: params.newValue,
        };
        return { ...acc, ...result };
      }, {});

      result = { ...result, ...transformedInArray };
    }

    return result;
  });

  return entries.reduce((acc, current) => {
    return { ...acc, ...current };
  }, {});
};

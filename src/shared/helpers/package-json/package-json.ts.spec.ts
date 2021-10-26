import * as PackageJson from "./package-json";

describe("package-json", () => {
  describe("getFlattenPackageJson", () => {
    it("when input params, then return object that it's key changed to `key.nestedKey` and it's value replaced with new value", () => {
      const params: Parameters<typeof PackageJson.getFlattenPackageJson>[0] = {
        newValue: "value",
        packageJson: {
          dependencies: {
            react: "17.0.0",
          },
          files: ["dist"],
          name: "sample",
          version: "0.0.0",
        },
      };

      const result = PackageJson.getFlattenPackageJson(params);

      expect(result).toStrictEqual({
        "dependencies.react": "value",
        files: "value",
        "files.dist": "value",
        name: "value",
        version: "value",
      });
    });
  });
});

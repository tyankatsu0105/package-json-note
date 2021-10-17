import { hello } from "./index";

describe("index", () => {
  describe("hello", () => {
    it("when input name, then return hello", () => {
      const result = hello("tyankatsu");

      expect(result).toBe("hello tyankatsu");
    });
  });
});

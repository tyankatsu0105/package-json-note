/**
 * @type {import('@swc/core/types').Config}
 */
module.exports = {
  jsc: {
    parser: {
      syntax: "typescript",
    },
  },
  module: {
    type: "commonjs",
  },
};

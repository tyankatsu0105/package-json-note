import { join } from "path";

import { CONFIG_NAME } from "../../const";

export const getConfig = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const config = require(join(process.cwd(), CONFIG_NAME));

  return config;
};

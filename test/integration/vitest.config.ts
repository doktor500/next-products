import { defineConfig } from "vitest/config";

import { rootConfig } from "../../vitest.config";

export default defineConfig({
  ...rootConfig,
  root: "./test/integration",
  test: {
    ...rootConfig.test,
  },
});

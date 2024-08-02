const nextJest = require("next/jest");
const dotenv = require("dotenv");

// eslint-disable-next-line no-unused-vars
const dotenvConfig = dotenv.config({
  path: ".env.development",
});

const createJestConfig = nextJest({
  dir: ".",
});
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 60000,
});

module.exports = jestConfig;

import { defineConfig } from "cypress";

const cypressJsonConfig = {

  fileServerFolder: ".",
  fixturesFolder: "./cypress/src/fixtures",
  video: false,
  videosFolder: "../../dist/cypress/src/e2e/videos",
  screenshotsFolder: "../../dist/cypress/src/e2e/screenshots",
  chromeWebSecurity: false,
  viewportWidth: 1300,
  viewportHeight: 900,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,
  responseTimeout: 30000,
  waitToLoad: 7000,
  requestTimeout: 10000,
  retries: 2,
  env: {
    environment: "local",
    host: "http://localhost:4201",
    restrictionsApiTimeout: "25000",
    //userName: 'test123'

  },
  specPattern: "./cypress/src/e2e/**/*.cy.{js,jsx,ts,tsx}",
  supportFile: "./cypress/src/support/e2e.ts",
};
export default defineConfig({
  e2e: {
    ...cypressJsonConfig,
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});

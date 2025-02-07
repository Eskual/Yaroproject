const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 2400,
  viewportHeight: 1200,
  watchForFileChanges: false,
  e2e: {
    baseUrl: "https://admin.convoso.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});

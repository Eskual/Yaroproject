const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'https://admin.convoso.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});

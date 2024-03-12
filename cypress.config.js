const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  reporter: 'mochawesome',
  env: {
    url:'https://www.amazon.com/',
  },
  retries: {
    runMode: 1,
  },
  projectId:'',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/Integration/e2e/Spec/*.cy.js'
  },
});

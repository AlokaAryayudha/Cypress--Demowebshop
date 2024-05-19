const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://demowebshop.tricentis.com/register',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure : false,
    viewportHeight: 670,
    defaultCommandTimeout: 4500,
    pageLoadTimeout: 80000

  },
});

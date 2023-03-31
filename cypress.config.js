const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // defaultCommandTimeout: 15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      WEB_URL: "https://tailwindblock.vercel.app/",
    },
  },
});

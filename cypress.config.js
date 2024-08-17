const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'e2e-test/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
})

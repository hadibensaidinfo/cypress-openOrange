

const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Report-OpenOrange',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    saveJson: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/'

  },
})
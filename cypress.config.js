// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    env: {
      username: "standard_user",
      password: "secret_sauce"
    },
    video: true,                  // record video of test runs
    screenshotOnRunFailure: true, // take screenshot if test fails
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
};

const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
        // spec pattern to load all folders under e2e
          //  specPattern: "cypress/e2e/**/*.{js, jsx, ts, tsx, feature}"
       
        // spec pattern to load any folder containing .feature file
          //  specPattern: "**/**/*.{js, jsx, ts, tsx, feature}" 

          // // spec pattern to load any folder containing .feature file
           specPattern: "**/**/*.feature" 
  },
  
});

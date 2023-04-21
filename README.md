# Computer Database Test Suite

## Summary

A test suite for the Computer Database application written with cypress 

## Requirements

The test suite focuses on the following functionalities of the application:

- Add a new computer
- Filter by name

## Frameworks and Technologies

The test suite is written in Javascript and uses Cypress as the testing framework. Other technologies involved include:

- Cucumber BDD
- Page Object Modelling

### Prerequisites

To run this test suite, you must have the following programs installed on your local machine:

- Node.JS | 
- npm | 
- Visual Studio Code |
- Cypress |
- cucumber plugin

### Initialization Steps

To get the test suite up and running on a local environment, do the following:

- Open the folder of the cloned repository
- Change directory in your command line tool to the root directory of the test suite ($ cd hostfullyAutomation)
- Install the dependencies of the test suite

# Required dependencies
$ npm install
- Run the test suite
- bash
# Run test suite
$ npm test

# IMPORTANT!!! Cucumber BDD Configuration

Check the cucumber autocomplete settings and ensure that the location for step definition files has been set to the "step_definitions" folder which is within the support folder which is within the integration folder: "cypress/support/step_definitions/*.js". Code will not run if step definition files is not found within the right folder. We can do this by following the steps below:

- From VSC editor, click on settings and search for: `Cucumberautocomplete: Custom Parameters`
- Click on `Edit in settings.json`
- Add the following block of code to the settings.json file

"cucumberautocomplete.steps": [
        "cypress/support/step_definitions/*.js"
    ],
- Click on `Save` button


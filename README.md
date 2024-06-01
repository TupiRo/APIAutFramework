# APIAutFramework
# API AUT FRAMEWORK

This AUT Framework was implemented in JS with Cypress, following best practices to build a maintainable, reusable and scalable framework. Common methods were implemented to re use in all project besides API Test implemented were acceptance (CRUD), schema validation tests and performance tests for load, stress and spike testing. A HTML report is generated with all Passed and Failed TCs to be delivered with all team.
      

##   FRAMEWORK REQUIREMENTS
We need to have installed:

        - Node js

##   *CONFIGURE DEVELOPMENT ENVIRONMENT*
Please follow next steps to configure Development Environment:

        1. Clone the repository.
        2. Run: npm install

### Clone Project
Clone the following repository: https://github.com/TupiRo/APIAutFramework.git

### Run: npm install (Install dependencies)
##### 1. Open a terminal.
##### 2. Execute the following command:
```
npm install
```

  
## Running Tests and Generating Report

To run tests and generate reports, we can run in two ways:

    * Using Cypress Dashboard
    * Using CLI

To execute the tasks open a terminal and go to project folder path.

### Using CLI
Execute following command to run by cli:
```
    npx cypress run
```
A HTML report is generated in the Reports path. (cypress/reports/index.html)

### Using Cypress Dashboard
Open a terminal and run following command to open dashboard:

```
    npx cypress open
```
UI Cypress Dashboard will be open and you will be able to run specific test or suite from SPECS section
    

## AUTOMATED TESTS

Following TCs were automated in this challenge to cover critical funcionality first.

    * Acceptance Tests:
        - CRUD for Pet object
        - CRUD for Order object
        - CRUD for User object
    * Schema Validation:
        - Schema validation for Pet
        - Schema validation for Order
        - Schema validation for User
    * Performance Tests:
        - Load test
        - Stress test
        - Spike test


All tests are in its proper paths: 

    * Acceptance Tests: cypress/e2e/acceptance
    * Schema Validation: cypress/e2e/schema
    * Performance Tests: cypress/e2e/performance


WebdriverIO E2E Testing Suite - Saucedemo
This repository contains an End-to-End (E2E) automation suite for the Saucedemo application. The project is built using WebdriverIO and the Behavior-Driven Development (BDD) approach via Cucumber, following the Page Object Model (POM) design pattern for maintainability and scalability.

Key Features
1. BDD Compliance: Tests are written in Gherkin (.feature files) for easy collaboration between technical and non-technical stakeholders.
2. Design Pattern: Implements the Page Object Model (POM) to separate selectors (Page Objects) from test logic (Step Definitions).
3. Multi-Browser Execution: Configured for parallel execution across major desktop browsers.
4. Data Robustness: Includes Boundary Testing scenarios (Scenario Outline) to validate data sanitization (e.g., input trimming).

Setup and Requirements
The following software must be installed on your operating system:
1. Node.js: (LTS version 18+ recommended)
2. npm: (Installed with Node.js)
3. Git

Required Browsers
Please ensure you have the following browsers installed on your machine, as the test suite is configured to run tests on them in parallel:
1. Google Chrome
2. Mozilla Firefox
3. Microsoft Edge

Installation Steps
Clone the Repository:

git clone https://github.com/OtrAle/epam-final-proyect/
cd final-project

Install Dependencies:
npm install

Execution Commands
All commands are executed from the project root directory.

Command	Description
npm run wdio	Default Run: Executes all tests in all configured browsers (chrome, firefox, MicrosoftEdge) in parallel.
npm run wdio -- --spec ./features/login.feature	Executes tests only for the specified .feature file.
npx wdio run ./wdio.conf.js --suite [SUITE_NAME]	Executes tests only for a specific browser suite defined in wdio.conf.js (e.g., quick_chrome).
npm run wdio -- --cucumberOpts.tags="@Smoke"	Executes scenarios tagged with @Smoke (or other Cucumber tags like @Regression).

Project Structure
Folder/File	Purpose
/features	Contains all test specifications written in Gherkin (.feature files).
/features/step-definitions	Contains the JavaScript files (steps.js) that implement the logic for the Gherkin steps (Given, When, Then).
/pageobjects	Contains the Page Object classes, defining all web element selectors and interaction methods (POM).
wdio.conf.js	WebdriverIO's main configuration file (capabilities, timeouts, framework, etc.).
package.json	Lists all project dependencies and executable scripts.

Contribution
Author: Laura Alejandra Hernández Martínez
License: ISC

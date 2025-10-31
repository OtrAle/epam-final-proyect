# WebdriverIO E2E Login Testing – Saucedemo

This repository contains an **End-to-End (E2E)** automation suite focused on testing the **Login functionality** of the [Saucedemo](https://www.saucedemo.com/) application.  
It uses **WebdriverIO** with **Cucumber (BDD)** and follows the **Page Object Model (POM)** structure for clarity and scalability.


## Key Features

- **Behavior-Driven Development (BDD):** Tests are written in Gherkin (`.feature` files) for better readability and collaboration.  
- **Page Object Model (POM):** Maintains separation between UI elements and test logic.  
- **Cross-browser execution:** Configured for Chrome, Firefox, and Edge.  
- **Validation coverage:** Handles both positive and negative login scenarios with robust input handling.


## Requirements

- Node.js
- npm 
- Git  

## Required browsers

- Google Chrome  
- Mozilla Firefox  
- Microsoft Edge  



## Installation

```bash
git clone https://github.com/OtrAle/epam-final-proyect
npm install
```


## Execution Commands

Run from the project root directory:

| Command | Description |
|----------|-------------|
| `npm run wdio` | Runs all login tests across all configured browsers. |


## Project Structure

| Path | Purpose |
|------|----------|
| `/features/login.feature` | Contains the Gherkin scenarios for Login validation. |
| `/features/step-definitions/login.steps.js` | Step definitions implementing the login logic. |
| `/pageobjects/Login.page.js` | Page Object for selectors and login-related actions. |
| `wdio.conf.js` | WebdriverIO configuration file. |
| `package.json` | Dependencies and npm scripts. |


##  Test Scenarios Covered
- ✅ **Successful login** with valid credentials (standard, problem, error, visual users)  
- ❌ **Login with empty fields** (username and/or password cleared)  
- ❌ **Login with invalid credentials** (non-existent users, wrong passwords, case sensitivity, leading/trailing spaces)  
- ❌ **Locked-out account login**  

---

## Author

**Laura Alejandra Henández Martínez**

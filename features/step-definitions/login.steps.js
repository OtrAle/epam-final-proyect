const { Given, When, Then, After, Before } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');


//HOOKS 
Before(async function (scenario) {
    console.info(`\n[WDIO INFO] SCENARIO STARTED: ${scenario.pickle.name}`);
    await browser.maximizeWindow();  
});

After(async function (scenario) {
    await browser.deleteCookies(); 
    console.info(`\n[WDIO INFO] SCENARIO ENDED: ${scenario.pickle.name}`);
});

// GIVEN 
Given('the user is on the login page', async () => {
    await LoginPage.open();
    console.info(`[GIVEN INFO] Login page opened and path verified: ${LoginPage.expectedPath}`);
});

// WHEN
When('the user logs in with username {string} and password {string}', async (username, password) => {
    console.debug(`[WHEN DEBUG] Attempting login with Username: "${username}" and Password: "${password}"`);
    await LoginPage.login(username, password);    
});

When('the user enters {string} in the {string} field', async (value, fieldName) => {
    console.debug(`[WHEN DEBUG] Entering value "${value}" into field: ${fieldName}`);
    await LoginPage.enterValueInField(fieldName, value);
});

When('clears the content of the {string} field', async (fieldName) => {
    console.info(`[WHEN INFO] Clearing content of field: ${fieldName}`);
    await LoginPage.clearField(fieldName); 
});

When('clicks the "Login" button', async () => {
    console.info('[WHEN INFO] "Login" button clicked. Awaiting result...');
    await LoginPage.loginButton.click();
});

// THEN 
Then('the user is redirected to the inventory page', async () => {
    await expect(await InventoryPage.getCurrentPath()).toEqual(InventoryPage.expectedPath);
    console.info(`[THEN INFO] Successful redirect confirmed. Path: ${InventoryPage.expectedPath}`);
});

Then('the inventory container is visible on the page', async () => {
    await expect(InventoryPage.inventoryContainer).toBeDisplayed();
    console.info('[THEN INFO] Inventory container verified as visible.');
});

Then('the login error message is visible', async () => {
    await expect(LoginPage.errorMessage).toBeDisplayed();
    console.warn('[THEN WARN] Login error message verified as visible.');
});

Then('the error message contains the text {string}', async (expectedText) => {
    await expect(LoginPage.errorMessage).toHaveText(expectedText);
    console.warn(`[THEN WARN] Expected error message validated: "${expectedText}"`);
});

Then('the user remains on the login page', async () => {
    await expect(await LoginPage.getCurrentPath()).toEqual(LoginPage.expectedPath);
    console.info(`[THEN INFO] User remains on the login page. Path: ${LoginPage.expectedPath}`);
});

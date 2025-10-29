const { Given, When, Then, After, Before } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const Page = require('../pageobjects/page.js');

//HOOKS 
Before(async function (scenario) {
    await browser.maximizeWindow(); 
});

After(async function (scenario) {
    await browser.deleteCookies(); 
});

// GIVEN 
Given('the user is on the login page', async () => {
    await LoginPage.open();
});

// WHEN
When('the user logs in with username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

When('the user enters {string} in the {string} field', async (value, fieldName) => {
    await LoginPage.enterValueInField(fieldName, value);
});

When('clears the content of the {string} field', async (fieldName) => {
    await LoginPage.clearField(fieldName); 
});

When('clicks the "Login" button', async () => {
    await LoginPage.loginButton.click();
});

// THEN 
Then('the user is redirected to the dashboard', async () => {
    await expect(await InventoryPage.getCurrentPath()).toEqual(InventoryPage.expectedPath);
});

Then('the inventory container is visible on the page', async () => {
    await expect(InventoryPage.inventoryContainer).toBeDisplayed();
});

Then('the login error message is visible', async () => {
    await expect(LoginPage.errorMessage).toBeDisplayed();
});

Then('the error message contains the text {string}', async (expectedText) => {
    await expect(LoginPage.errorMessage).toHaveText(expectedText);
});

Then('the user remains on the login page', async () => {
    await expect(await LoginPage.getCurrentPath()).toEqual(LoginPage.expectedPath);
});

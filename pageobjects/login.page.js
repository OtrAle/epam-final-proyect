const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  fields = {
    Username: () => $('[data-test="username"]'),
    Password: () => $('[data-test="password"]'),
  };

  get loginButton() {
    return $('[data-test="login-button"]');
  }

  get errorMessage() {
    return $('[data-test="error"]');
  }

  get expectedPath() {
    return "/";
  }

  getFieldElement(fieldName) {
   const fieldFn = this.fields[fieldName];
    if (!fieldFn) {
        console.error(`[PO ERROR] Error in Page Object: Invalid or undefined field name: ${fieldName}`);
        throw new Error(`Invalid field name: ${fieldName}`);
    }
    return fieldFn();
  }

  async enterValueInField(fieldName, value) {
    const field = this.getFieldElement(fieldName);
    try {
        await field.setValue(value);
    } catch (error) {
        console.error(`[PO ERROR] Technical Failure: Could not set value in field "${fieldName}". Selector: ${field.selector}`);
        throw error;
    }
  }

  async clearField(fieldName) {
    const field =  this.getFieldElement(fieldName);
    const value = await field.getValue();
   try {
      for (let i = 0; i < value.length; i++) {
        await browser.keys("Backspace");
      }
    } catch (error) {
        console.error(`[PO ERROR] Technical Failure: Could not clear the content of field "${fieldName}".`);
        throw error;
    }
  }

  async login(username, password) {
    await this.enterValueInField("Username", username.replaceAll("'", ""));
    await this.enterValueInField("Password", password.replaceAll("'", ""));
    try {
        await this.loginButton.click();
    } catch (error) {
        console.error(`[PO ERROR] Technical Failure: Failed to click the Login button. Selector: ${this.loginButton.selector}`);
        throw error;
    }
  }

  async open() {
    await super.open("/");
    await expect(await this.getCurrentPath()).toEqual(this.expectedPath);
  }
}

module.exports = new LoginPage();
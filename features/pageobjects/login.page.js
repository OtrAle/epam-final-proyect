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
    if (!fieldFn) throw new Error(`Invalid field name: ${fieldName}`);
    return fieldFn();
  }

  async enterValueInField(fieldName, value) {
    const field = this.getFieldElement(fieldName);
    await field.setValue(value);
  }

  async clearField(fieldName) {
    const field =  this.getFieldElement(fieldName);
    const value = await field.getValue();
      for (let i = 0; i < value.length; i++) {
        await browser.keys("Backspace");
      }
  }

  async login(username, password) {
    await this.enterValueInField("Username", username.replaceAll("'", ""));
    await this.enterValueInField("Password", password.replaceAll("'", ""));
    await this.loginButton.click();
  }

  async open() {
    await super.open("/");
  }
}

module.exports = new LoginPage();
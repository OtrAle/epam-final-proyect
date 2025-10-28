const { browser } = require("@wdio/globals");

module.exports = class Page {
  open(path) {
    return browser.url(path);
  }

  async getCurrentPath() {
    const url = await browser.getUrl();
    return new URL(url).pathname;
  }
};

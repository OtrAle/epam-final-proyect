const { $ } = require("@wdio/globals");
const Page = require("./page");


class InventoryPage extends Page {

  get inventoryContainer() {
    return $('[data-test="inventory-container"]');
  }

  async open() {
        await super.open('/inventory.html');
    }

    get expectedPath() {
        return '/inventory.html';; 
    }
}

module.exports = new InventoryPage();
/* eslint-disable max-len */
let BasePage = require("./base.page");
let View = require("../elements/view.element");


let checkoutPageHeaderLocator = ".content > h1";

class CheckoutPage extends BasePage {
    getCheckoutPageHeader() {
        return new View(element(by.css(checkoutPageHeaderLocator)), "Checout page header");
    }

    async verifyCheckoutHeader() {
        return await allure.createStep("Open Checkout page", async () => await this.getCheckoutPageHeader().getText())();
    }
}

module.exports = new CheckoutPage();
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let Checkbox = require("../elements/checkbox.element");


let buyOnHotliheCheckboxLocator = ".sorting-in .type-checkbox";
let addToChartButtonLocator = ".tile-viewbox > ul li:nth-of-type(3) .item-checkout";

class ProductsListPage extends BasePage {
    getBuyOnHotlineCheckbox() {
        return new Checkbox(element(by.css(buyOnHotliheCheckboxLocator)), "Buy on Hotline checkbox");
    }

    getAddToChurtButton() {
        return new Button(element(by.css(addToChartButtonLocator)), "Add to chart button");
    }

    async checkCheckbox() {
        await allure.createStep("Check Buy on Hotline chechbox", async () => {
            await this.getBuyOnHotlineCheckbox().check();
        })();
    }

    async clicAddToChart() {
        await allure.createStep("Click Add to Chard button", async () => {
            await this.getAddToChurtButton().click();
        })();
    }
}

module.exports = new ProductsListPage();

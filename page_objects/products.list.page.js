let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let Checkbox = require("../elements/checkbox.element");
let View = require("../elements/view.element");

let buyOnHotliheCheckboxLocator = ".sorting-in .type-checkbox";
let dachaSadLocator = `[class="level-1 dacha_sad"]`;
let pumpsLocator = `[href*="/dacha_sad/nasosy-vodosnabzheniya/46036"]`;
let pollFountainLocator = `[data-menu-id = "2952"]`;

class ProductsListPage extends BasePage {
    getDachaSad() {
        return new View(element(by.css(dachaSadLocator)), "Search Dacha Sad left menu item");
    }

    getPumps() {
        return new Button(element(by.css(pumpsLocator)), "Pumps button in Dacha Sad menu");
    }

    getPollFountain() {
        return new Button(element(by.css(pollFountainLocator)), "Poll, fountain button locator");
    }

    getBuyOnHotlineCheckbox() {
        return new Checkbox(element(by.css(buyOnHotliheCheckboxLocator)), "Buy on Hotline checkbox");
    }

    getAddToCartButton(itemNumber) {
        return new Button(element(by.css(`.tile-viewbox > ul li:nth-of-type(${itemNumber}) .item-checkout`)), "Add to chart button");
    }

    async addToCart(itemNumber) {
        await allure.createStep("Add item to cart", async () => {
            await browser.actions().mouseMove(this.getDachaSad().getProtractorElement()).perform();
            await this.getPollFountain().click();
            await this.getPumps().click();
            await this.getBuyOnHotlineCheckbox().check();
            await this.getAddToCartButton(itemNumber).click();
        })();
    }
}

module.exports = new ProductsListPage();

/* eslint-disable no-undef */
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let Checkbox = require("../elements/checkbox.element");
let View = require("../elements/view.element");
let Input = require("../elements/input.element");

let EC = protractor.ExpectedConditions;

let buyOnHotliheCheckboxLocator = ".sorting-in .type-checkbox";
let dachaSadLocator = `[class="level-1 dacha_sad"]`;
let pumpsLocator = `[href*="/dacha_sad/nasosy-vodosnabzheniya/46036"]`;
let pollFountainLocator = `[data-menu-id = "2952"]`;
let filterItemLocator = `[class="filters-item opened "] .item-bd > ul li:nth-of-type(21) [class="type-checkbox plus"]`;
let minPriceInputLocator = ".price-slider-box input:nth-of-type(1)";
let maxPriceInputLocator = ".price-slider-box input:nth-of-type(3)";
let foundItemLocator = ".product-item .item-info a";
let okButtonLocator = ".price-slider-box .btn-graphite";
let loadingAnimationLocator = `[class="cell-12 busy"]`;

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

    getFilterItemCheckbox() {
        return new Checkbox(element(by.css(filterItemLocator)), "Filter item checkbox");
    }

    getMinPriceInput() {
        return new Input(element(by.css(minPriceInputLocator)), "Min price input");
    }

    getMaxPriceInput() {
        return new Input(element(by.css(maxPriceInputLocator)), "Max price input");
    }

    getFoundItem() {
        return new View(element(by.css(foundItemLocator)), "First found item in list");
    }

    getOkButton() {
        return new Button(element(by.css(okButtonLocator)), "OK button");
    }

    getLoadingAnimation() {
        return new View(element(by.css(loadingAnimationLocator)), "Load items animation");
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

    async checkFilterCheckbox() {
        await allure.createStep("Check filter item checkbox", async () => {
            await this.getFilterItemCheckbox().check();
        })();
    }

    async enterMinPrice(minPrice) {
        await allure.createStep(`Enter min price - ${minPrice}`, async () => {
            for (let i = 0; i <= 2; i++) {
                await this.getMinPriceInput().sendKeys(protractor.Key.DELETE);
            }
            await this.getMinPriceInput().sendKeys(minPrice);
        })();
    }

    async enterMaxPrice(maxPrice) {
        await allure.createStep(`Enter min price - ${maxPrice}`, async () => {
            for (let i = 0; i <= 5; i++) {
                await this.getMaxPriceInput().sendKeys(protractor.Key.DELETE);
            }
            await this.getMaxPriceInput().sendKeys(maxPrice);
        })();
    }

    async clickOkButton() {
        await allure.createStep("Check OK button", async () => {
            await this.getOkButton().click();
        })();
    }

    async verifyFoundItem() {
        await browser.wait(EC.invisibilityOf(this.getLoadingAnimation().getProtractorElement()), 3000);
        return await allure.createStep("Check found item", async () => await this.getFoundItem().getText())();
    }
}

module.exports = new ProductsListPage();

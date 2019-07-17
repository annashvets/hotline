/* eslint-disable max-len */
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let Input = require("../elements/input.element");
let View = require("../elements/view.element");
let DropDown = require("../elements/view.element");

let loginButtonLocator = ".item-login a";
let userNameLocator = ".item-login .name";
let searchInputLocator = "#searchbox";
let searchFirstItemLocator = "#live-search > ul li:nth-of-type(1)";
let searchResultLocator = ".cell-12 h1";
let cartIconLocator = ".item-cart .icon";
let goodsCatalogLocator = `[class="menu-dropdown  pointer cell-sm"] > span`;
let cartDeleteIconLocator = `[class="viewbox-striped border-t"] > ul li:nth-of-type(1) .delete`;
//`[class="viewbox-striped border-t"] li:nth-of-type(1) > i`;
let goToCartButtonLocator = `[href="/cart/"]`;
let hotlineLogoLocator = `[class="header-logo cell-4 cell-sm-6 cell-xs"] > a`;
let cartCounterLocator = ".item-cart .box-in span";

// eslint-disable-next-line no-undef
let EC = protractor.ExpectedConditions;

class MainPage extends BasePage {
    getLoginButton() {
        return new Button(element(by.css(loginButtonLocator)), "Login button");
    }

    getUserName() {
        return new Button(element(by.css(userNameLocator)), "User name");
    }

    getSearchInput() {
        return new Input(element(by.css(searchInputLocator)), "Search field");
    }

    getSearchFirstItem() {
        return new View(element(by.css(searchFirstItemLocator)), "First item in search list");
    }

    getSearchResultFirstItem() {
        return new View(element(by.css(searchResultLocator)), "Search result first item");
    }

    getCartIcon() {
        return new Button(element(by.css(cartIconLocator)), "Cart icon");
    }

    getGoodsCatalog() {
        return new DropDown(element(by.css(goodsCatalogLocator)), "Goods Catalog drop-down");
    }

    getCartDeleteIcon() {
        return new Button(element(by.css(cartDeleteIconLocator)), "First trash icon in cart");
    }

    getGoToCartButton() {
        return new Button(element(by.css(goToCartButtonLocator)), "Go To Cart Button");
    }

    getHotlineLogo() {
        return new Button(element(by.css(hotlineLogoLocator)), "Hotline logo");
    }

    getCartCounter() {
        return new View(element(by.css(cartCounterLocator)), "Cart counter number");
    }

    async open() {
        await allure.createStep("Open Hotline page", async () => {
            await browser.get('https://hotline.ua/');
        })();
    }

    async clickLoginButton() {
        await allure.createStep("Click Login button", async () => {
            await this.getLoginButton().click();
        })();
    }

    async verifyUserName() {
        return await allure.createStep("Verify user name", async () => await this.getUserName().getText())();
    }

    async enterSerchProduct(productName) {
        await allure.createStep(`Enter product ${productName} into search field`, async () => {
            await this.getSearchInput().sendKeys(productName);
        })();
    }

    async clickSearchFirstItem() {
        await browser.wait(EC.visibilityOf(this.getSearchFirstItem().getProtractorElement()), 3000);
        await allure.createStep("Select first item in search list", async () => {
            await this.getSearchFirstItem().click();
        })();
    }

    async verifyFirstItemText() {
        return await allure.createStep("Verify that correct product found", async () => await this.getSearchResultFirstItem().getText())();
    }

    async clickCartIcon() {
        await allure.createStep("Click on Cart icon", async () => {
            await this.getCartIcon().click();
        })();
    }

    async openGoodsCatalog() {
        await allure.createStep("Click on Cart icon", async () => {
            await this.getGoodsCatalog().click();
        })();
    }

    async clickDeleteIcon() {
        await browser.wait(EC.visibilityOf(this.getCartDeleteIcon().getProtractorElement()), 6000);
        await allure.createStep("Click on first trash icon", async () => {
            await this.getCartDeleteIcon().click();
        })();
    }

    async clickGoToCart() {
        await allure.createStep("Click on GoToCart button", async () => {
            await this.getGoToCartButton().click();
        })();
    }

    async clickHotline() {
        await allure.createStep("Click on Hotline logo", async () => {
            await this.getHotlineLogo().click();
        })();
    }

    async checkCartCounter() {
        await browser.wait(EC.visibilityOf(this.getCartCounter().getProtractorElement()), 5000);
        await allure.createStep("Get cart counter number", async () => {
            await this.getCartCounter().getText();
        })();
    }
}

module.exports = new MainPage();
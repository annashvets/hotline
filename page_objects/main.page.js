/* eslint-disable max-len */
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let Input = require("../elements/input.element");
let View = require("../elements/view.element");

let loginButtonLocator = ".item-login a";
let userNameLocator = ".item-login .name";
let searchInputLocator = "#searchbox";
let searchFirstItemLocator = "#live-search > ul li:nth-of-type(1)";
let searchResultLocator = ".cell-12 h1";
let dachaSadLocator = `[class="level-1 dacha_sad"]`;
let pumpsLocator = `[href*="/dacha_sad/nasosy-vodosnabzheniya/46036"]`;
let pollFountainLocator = `[data-menu-id = "2952"]`;

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

    getDachaSad() {
        return new View(element(by.css(dachaSadLocator)), "Search Dacha Sad left menu item");
    }

    getPumps() {
        return new Button(element(by.css(pumpsLocator)), "Pumps button in Dacha Sad menu");
    }

    getPollFountain() {
        return new Button(element(by.css(pollFountainLocator)), "Poll, fountain button locator");
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

    async hoverDachaSad() {
        await allure.createStep("Hover Dacha Sad", async () => {
            await browser.actions().mouseMove(this.getDachaSad().getProtractorElement()).perform();
        })();
    }

    async clickPumps() {
        await allure.createStep("Select Pumps menu item", async () => {
            await this.getPumps().click();
        })();
    }

    async clickPollFountain() {
        await allure.createStep("Select Poll,Fountain menu item", async () => {
            await this.getPollFountain().click();
        })();
    }
}

module.exports = new MainPage();
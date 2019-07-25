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
let goodsCatalogLocator = `.menu-dropdown`;
let cartDeleteIconLocator = `[class="viewbox-striped border-t"] > ul li:nth-of-type(1) .delete`;
let goToCartButtonLocator = `[class="dropdown-bd active"] .m_b-md > a`;
let hotlineLogoLocator = `[class="header-logo cell-4 cell-sm-6 cell-xs"] > a`;
let cartCounterLocator = ".item-cart .box-in > span";
let feedbackLinkLocator = `[data-navigation-id="app-footer-users"] > ul li:nth-of-type(5) a`;
let ChooseFileButtonLocator = `[type="file"]`;
let cartAnimationLocator = ".dropdown.busy";
let fileTypeErrorLocator = `[class="cell-7 cell-sm"] div:nth-of-type(2) > div:nth-of-type(2) [class="errors hidden"]`;
let nextChooseFileButtonLocator = `[class="cell-7 cell-sm"] > div:nth-of-type(2) [type="file"]`;

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
        return new Button(element(by.css(goToCartButtonLocator)), "GoToCart Button");
    }

    getHotlineLogo() {
        return new Button(element(by.css(hotlineLogoLocator)), "Hotline logo");
    }

    getCartCounter() {
        return new View(element(by.css(cartCounterLocator)), "Cart counter number");
    }

    getFeedbackLink() {
        return new Button(element(by.css(feedbackLinkLocator)), "Feedback link");
    }

    getChooseFileButton() {
        return new Input(element(by.css(ChooseFileButtonLocator)), "Choose file button");
    }

    getCartAnimation() {
        return new View(element(by.css(cartAnimationLocator)), "Cart animation");
    }

    getNextChooseFileButton() {
        return new Input(element(by.css(nextChooseFileButtonLocator)), "Choose file button");
    }

    getFileTypeError() {
        return new View(element(by.css(fileTypeErrorLocator)), "Get file type error");
    }

    async open() {
        await allure.createStep("Open Hotline page", async () => {
            await browser.get('https://hotline.ua/');
        })();
    }

    async openMenuItem(link) {
        await allure.createStep(`Select ${link} menu item `, async () => {
            await browser.get(link);
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
        await browser.wait(EC.visibilityOf(this.getCartAnimation().getProtractorElement()), 6000);
        await browser.wait(EC.invisibilityOf(this.getCartAnimation().getProtractorElement()), 1000);
        await allure.createStep("Click on Cart icon", async () => {
            await this.getCartIcon().click();
        })();
    }

    async openGoodsCatalog() {
        await browser.wait(EC.visibilityOf(this.getCartAnimation().getProtractorElement()), 3000);
        await browser.sleep('2000');
        await allure.createStep("Click on Cart icon", async () => {
            await this.getGoodsCatalog().click();
        })();
    }

    async clickDeleteIcon() {
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
        await browser.wait(EC.visibilityOf(this.getCartAnimation().getProtractorElement()), 3000);
        await browser.wait(EC.invisibilityOf(this.getCartAnimation().getProtractorElement()), 1000);
        return await allure.createStep("Get cart counter number", async () => await this.getCartCounter().getText())();
    }

    async clickFeedbackLink() {
        await allure.createStep("Click on Feedback link", async () => {
            await this.getFeedbackLink().click();
        })();
    }

    async switchTab() {
        await allure.createStep("Switch tab", async () => {
            await browser.getAllWindowHandles().then(async (handles) => {
                await browser.driver.switchTo().window(handles[1]);
            });
        })();
    }

    async selectFile(filePath1, filePath2) {
        await browser.getAllWindowHandles().then(async (handles) => {
            await browser.driver.switchTo().window(handles[1]).then(async () => {
                await allure.createStep("Upload file", async () => {
                    await this.getChooseFileButton().sendKeys(filePath1);
                    await this.getNextChooseFileButton().sendKeys(filePath2);
                })();
            });
        });
    }

    async verifyFileTypeError() {
        return await allure.createStep("Verify tfile type error", async () => await this.getFileTypeError().getText())();
    }
}

module.exports = new MainPage();
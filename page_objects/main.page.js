let BasePage = require("./base.page");
let Button = require("../elements/button.element");

let loginButtonLocator = ".item-login a";
let userNameLocator = ".item-login .name";

class MainPage extends BasePage {
    getLoginButton() {
        return new Button(element(by.css(loginButtonLocator)), "Login button");
    }

    getUserName() {
        return new Button(element(by.css(userNameLocator)), "User name");
    }

    async open() {
        await allure.createStep("Open Hotline page", async () => {
            await browser.get('https://hotline.ua/');
        })();
    }

    async clickLoginButton(){
        await allure.createStep("Click Login button", async () => {
            await this.getLoginButton().click();
        })();
    }

    async verifyUserName(){
        return await allure.createStep("Verify user name", async () => {
        return await this.getUserName().getText();
        })();
    }

}

module.exports = new MainPage();
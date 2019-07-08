let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let Input = require("../elements/input.element");


let regEmailInputLocator = "#reg-form [type='email']";
let nickInputLocator = "#reg-form [type='text']";
let regPassInputLocator = "#reg-form [type='password']";
let registrationButtonLocator = "#submit-button";
let regEmailFieldErrorLocator = `[type = "email"] + div .errors`;
let regPassFieldErrorLocator = `[type = "password"] + div .errors`;


class RegistrationPage extends BasePage {
    getRegEmailInput() {
        return new Input(element(by.css(regEmailInputLocator)), "Email Input");
    }

    getNickInput() {
        return new Input(element(by.css(nickInputLocator)), "Nick name Input");
    }

    getRegPassInput() {
        return new Input(element(by.css(regPassInputLocator)), "Password Input");
    }

    getRegistrationButton() {
        return new Button(element(by.css(registrationButtonLocator)), "Registration Button");
    }

    getRegEmailFieldError() {
        return new Input(element(by.css(regEmailFieldErrorLocator)), "Email field error");
    }

    getRegPassFieldError() {
        return new Input(element(by.css(regPassFieldErrorLocator)), "Pass field error");
    }

    async register(password) {
        let timeStamp = Math.floor(Date.now() / 1000);
        let regEmail = `autotshvets+${timeStamp}@gmail.com`;
        let regNick = `autotshvets${timeStamp}`;
        await allure.createStep(`Enter email - ${regEmail}, nick - ${regNick} and password - ${password}`, async () => {
            await this.getRegEmailInput().sendKeys(regEmail);
            await this.getNickInput().sendKeys(regNick);
            await this.getRegPassInput().sendKeys(password);
        })();
    }

    async clickRegistration() {
        await allure.createStep("Click Registartion Button", async () => {
            await this.getRegistrationButton().click();
        })();
    }

    async verifyRegEmailFieldError() {
        return await allure.createStep("Check Email field error", async () => await this.getRegEmailFieldError().getText())();
    }

    async enterRegInvalidEmail(invalidEmail) {
        await allure.createStep(`Enter incorrect email - ${invalidEmail}`, async () => {
            await this.getRegEmailInput().sendKeys(invalidEmail);
        })();
    }

    async cleareRegEmailInput() {
        await this.getRegEmailInput().clear();
    }

    async verifyRegPassFieldError() {
        return await allure.createStep("Check Pass field error", async () => await this.getRegPassFieldError().getText())();
    }
}

module.exports = new RegistrationPage();
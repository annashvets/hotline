let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let Input = require("../elements/input.element");


let regEmailInputLocator = "#reg-form [type='email']";
let nickInputLocator = "#reg-form [type='text']";
let regPassInputLocator = "#reg-form [type='password']";
let registrationButtonLocator = "#submit-button";

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
}

module.exports = new RegistrationPage();
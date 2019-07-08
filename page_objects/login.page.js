let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let Input = require("../elements/input.element");

let emailInputLocator = ".form-item [type='email']";
let passInputLocator = ".form-item [type='password']";
let submitButtonLocator = ".btn-graphite";
let registerButtonLocator = ".viewbox .text [href]";
let passFieldError = `[type = "password"] + div .errors`;
let emailFieldError = ".messagebox div";

class LoginPage extends BasePage {
    getEmailInput() {
        return new Input(element(by.css(emailInputLocator)), "Email Input");
    }

    getPassInput() {
        return new Input(element(by.css(passInputLocator)), "Password Input");
    }

    getSubmitButton() {
        return new Button(element(by.css(submitButtonLocator)), "Submit button");
    }

    getRegisterButton() {
        return new Button(element(by.css(registerButtonLocator)), "Click Register Button");
    }

    getPassFieldError() {
        return new Input(element(by.css(passFieldError)), "Pass field validation error");
    }

    getEmailFieldError() {
        return new Input(element(by.css(emailFieldError)), "Email field validation error");
    }

    async login(email, pass) {
        await allure.createStep(`Enter user name ${email} and password ${pass}`, async () => {
            await this.getEmailInput().sendKeys(email);
            await this.getPassInput().sendKeys(pass);
        })();
    }

    async clickSubmit() {
        await allure.createStep("Click on Submit button", async () => {
            await this.getSubmitButton().click();
        })();
    }

    async clickRegister() {
        await allure.createStep("Click on Register Button", async () => {
            await this.getRegisterButton().click();
        })();
    }

    async verifyPassFiledError() {
        return await allure.createStep("Verify Pass field validation error", async () => await this.getPassFieldError().getText())();
    }

    async verifyEmailFieldError() {
        return await allure.createStep("Verify Email field validation error", async () => await this.getEmailFieldError().getText())();
    }
}

module.exports = new LoginPage();

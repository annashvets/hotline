let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let Input = require("../elements/input.element");

let emailInputLocator = ".form-item [type='email']";
let passInputLocator = ".form-item [type='password']";
let submitButtonLocator = ".btn-graphite";

class LoginPage extends BasePage{ 

    getEmailInput(){
        return new Input(element(by.css(emailInputLocator)), "Email Input");
    }

    getPassInput(){
        return new Input(element(by.css(passInputLocator)), "Password Input");
    }

    getSubmitButton(){
        return new Button(element(by.css(submitButtonLocator)), "Submit button");
    }

    async login(email, pass){
        await allure.createStep(`Enter user name ${email} and password ${pass}`, async () => {
            await this.getEmailInput().sendKeys(email);
            await this.getPassInput().sendKeys(pass);
        })();
    }

    async clickSubmit(){
        await allure.createStep("Click on Submit button", async () => {
            await this.getSubmitButton().click();
        })();
    }
    
}

module.exports = new LoginPage();

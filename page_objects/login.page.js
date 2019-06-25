let BasePage = require("./base.page");
let Button = require("../elements/button.element");

let emailInputLocator = ".form-item [type='email']";
let passInputLocator = ".form-item [type='password']";
let submitButtonLocator = ".btn-graphite";

class LoginPage extends BasePage{ 

    getEmailInput(){
        return new Button(element(by.css(emailInputLocator)), "Email Input");
    }

    getPassInput(){
        return new Button(element(by.css(passInputLocator)), "Password Input");
    }

    getSubmitButton(){
        return new Button(element(by.css(submitButtonLocator)), "Submit button");
    }

    async login(email, pass){
        await this.getEmailInput().sendKeys(email);
        await this.getPassInput().sendKeys(pass);
    }

    async clickSubmit(){
        await this.getSubmitButton().click();
    }
    
}

module.exports = new LoginPage();

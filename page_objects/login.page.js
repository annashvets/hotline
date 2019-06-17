let emailInputLocator = ".form-item [type='email']";
let passInputLocator = ".form-item [type='password']";
let submitButtonLocator = ".btn-graphite";

class LoginPage { 
    constructor (){

        this.emailInput = element(by.css(emailInputLocator));
        this.passInput = element(by.css(passInputLocator));
        this.submitButton = element(by.css(submitButtonLocator));

    }

async login(email, pass){
    await this.emailInput.sendKeys(email);
    await this.passInput.sendKeys(pass);
}

async clickSubmit(){
    await this.submitButton.click();
}

}

module.exports = LoginPage;

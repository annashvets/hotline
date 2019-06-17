let emailInputLocator = ".form-item [type='email']";
let passInputLocator = ".form-item [type='password']";
let submitButtonLocator = ".btn-graphite";

class LoginPage { 
    constructor (){

    }
getEmailInput(){
    return element(by.css(emailInputLocator));
}

getSubmitButton(){
    return element(by.css(submitButtonLocator));
}

getPassInput(){
    return element(by.css(passInputLocator));
}

async login(email, pass){
    await this.getEmailInput().sendKeys(email);
    await this.getPassInput().sendKeys(pass);
}

async clickSubmit(){
    await this.getSubmitButton().click();
}

}

module.exports = LoginPage;

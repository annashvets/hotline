let BasePage = require("./base.page");
let Button = require("../elements/button.element");

let loginButtonLocator = ".item-login a";
let userNameLocator = ".item-login .name";

class MainPage extends BasePage{
    
    getLoginButton(){
        return new Button(element(by.css(loginButtonLocator)), "Login button");
    }

    getUserName(){
        return new Button(element(by.css(userNameLocator)), "User name");
    }

    async open(){
        await browser.get('https://hotline.ua/');
    }

    async clickLoginButton(){
        await this.getLoginButton().click();
    }

    async verifyUserName(){
        return this.getUserName().getText();
    }


}

module.exports = new MainPage();
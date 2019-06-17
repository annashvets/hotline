let loginButtonLocator = ".item-login a";
let userNameLocator = ".item-login .name";

class MainPage{
    constructor(){

    }

    async open(){
        await browser.get('https://hotline.ua/');
    }

    getLoginButton(){
        return element(by.css(loginButtonLocator));
    }

    getUserName(){
        return element(by.css(userNameLocator));
    }

    async clickLoginButton(){
        await this.getLoginButton().click();
    }

    async verifyUserName(){
        return this.getUserName().getText();
    }


}

module.exports = MainPage;
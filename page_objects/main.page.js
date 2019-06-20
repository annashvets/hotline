let loginButtonLocator = ".item-login a";
let userNameLocator = ".item-login .name";

class MainPage{
    constructor(){

        this.loginButton = element(by.css(loginButtonLocator));
        this.userName = element(by.css(userNameLocator));

    }

    async open(){
        await browser.get('https://hotline.ua/');
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async verifyUserName(){
        return this.userName.getText();
    }


}

module.exports = MainPage;
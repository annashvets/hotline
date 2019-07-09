/* eslint-disable max-len */
const mainPage = require("../../page_objects/main.page");
const loginPage = require("../../page_objects/login.page");

describe("Hotline login", () => {
    it("Unsuccessfull login - password field is empty", async () => {
        await mainPage.open();
        await mainPage.clickLoginButton();
        await loginPage.login("solovko_av@ukr.net", "");
        await loginPage.clickSubmit();
        expect(await loginPage.verifyPassFiledError()).toEqual("Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить");
    });

    it("Unsuccessfull login - incorrect password", async () => {
        await loginPage.login("solovko_av@ukr.net", "12345");
        await loginPage.clickSubmit();
        expect(await loginPage.verifyPassFiledError()).toEqual("Извините, вы ввели неправильный пароль. Если вы забыли свой пароль, вы можете его изменить");
    });

    it("Unsuccessfull login - incorrect email", async () => {
        await loginPage.login("solovko_av1@ukr.net", "12345");
        await loginPage.clickSubmit();
        expect(await loginPage.verifyEmailFieldError()).toEqual("Извините, пользователь с указанным e-mail не зарегистрирован, пожалуйста, убедитесь в правильности написания адреса");
    });
});
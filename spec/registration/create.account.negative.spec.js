/* eslint-disable max-len */
const mainPage = require("../../page_objects/main.page");
const loginPage = require("../../page_objects/login.page");
const registrationPage = require("../../page_objects/registration.page");

describe("Hotline registration", () => {
    it("Unsuccessfull registration - epmty email", async () => {
        await mainPage.open();
        await mainPage.clickLoginButton();
        await loginPage.clickRegister();
        await registrationPage.clickRegistration();
        expect(await registrationPage.verifyRegEmailFieldError()).toEqual("Заполните это поле");
    });

    it("Unsuccessfull registration - invalid email", async () => {
        await registrationPage.enterRegInvalidEmail("auto");
        await registrationPage.clickRegistration();
        expect(await registrationPage.verifyRegEmailFieldError()).toEqual("Поле не соответствует формату");
    });

    it("Unsuccessfull registration - email already registered", async () => {
        await registrationPage.cleareRegEmailInput();
        await registrationPage.enterRegInvalidEmail("solovko_av@ukr.net");
        await registrationPage.clickRegistration();
        expect(await registrationPage.verifyRegEmailFieldError()).toEqual("Извините, но такой e-mail уже занят");
    });

    it("Unsuccessfull registartion - password is invalid", async () => {
        await registrationPage.cleareRegEmailInput();
        await registrationPage.register("", "", "23");
        await registrationPage.clickRegistration();
        expect(await registrationPage.verifyRegPassFieldError()).toEqual("Длина поля не может быть меньше 4 и больше 16 символов");
    });
});
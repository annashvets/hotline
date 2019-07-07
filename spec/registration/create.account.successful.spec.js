const mainPage = require("../../page_objects/main.page");
const loginPage = require("../../page_objects/login.page");
const registrationPage = require("../../page_objects/registration.page");

describe("Hotline registration", () => {
    beforeAll(async function () {
       await browser.restart();
       browser.waitForAngularEnabled(false);
      });
    it("Successfull registration", async () => {
        await mainPage.open();
        await mainPage.clickLoginButton();
        await loginPage.clickRegister();
        await registrationPage.register("PAssw0rd2468");
        await registrationPage.clickRegistration();
        expect(await browser.getCurrentUrl()).toContain("https://hotline.ua/register/final/");
    });
});
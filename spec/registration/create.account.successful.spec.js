const mainPage = require("../../page_objects/main.page");
const loginPage = require("../../page_objects/login.page");
const registrationPage = require("../../page_objects/registration.page");

describe("Hotline registration", () => {
    it("Successfull registration", async () => {
        let timeStamp = Math.floor(Date.now() / 1000);
        await mainPage.open();
        await mainPage.clickLoginButton();
        await loginPage.clickRegister();
        await registrationPage.register(`autotshvets+${timeStamp}@gmail.com`, `annashvets${timeStamp}`, "PAssw0rd2468");
        await registrationPage.clickRegistration();
        expect(await browser.getCurrentUrl()).toContain("https://hotline.ua/register/final/");
    });
});
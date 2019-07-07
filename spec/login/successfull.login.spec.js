const mainPage = require("../../page_objects/main.page");
const loginPage = require("../../page_objects/login.page");

describe("Hotline login", () => {
    it("Successfull login", async () => {
        await mainPage.open();
        await mainPage.clickLoginButton();
        await loginPage.login("solovko_av@ukr.net", "0682326605");
        await loginPage.clickSubmit();
        expect(await mainPage.verifyUserName()).toEqual("shanna");
    });
});
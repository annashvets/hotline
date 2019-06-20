const MainPage = require("./page_objects/main.page");
const LoginPage = require("./page_objects/login.page");

let mainPage = new MainPage();
let loginPage = new LoginPage();

describe("Hotline login", () => {
    it("Successfull login", async () => {
      
      await mainPage.open();
      await mainPage.clickLoginButton();
      await loginPage.login("solovko_av@ukr.net", "0682326605");
      await loginPage.clickSubmit();
      expect(await mainPage.verifyUserName()).toEqual("shanna");
    
      });

  });
const mainPage = require("../../page_objects/main.page");

describe("Hotline Search", () => {
    it("Search product successfull", async () => {
        await mainPage.open();
        await mainPage.enterSerchProduct("Samsung Galaxy");
        await mainPage.clickSearchFirstItem();
        expect(await mainPage.verifyFirstItemText()).toContain("Samsung Galaxy");
    });
});
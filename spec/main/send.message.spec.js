const mainPage = require("../../page_objects/main.page");

describe("Hotline Footer", () => {
    it("Send message", async () => {
        await mainPage.open();
        await mainPage.clickFeedbackLink();
        await mainPage.selectFile("/Users/bob/Desktop/1.png");
       // expect(await mainPage.verifyFirstItemText()).toContain("Samsung Galaxy");
    });
});
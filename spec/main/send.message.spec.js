const mainPage = require("../../page_objects/main.page");

describe("Hotline Footer", () => {
    it("Send message", async () => {
        await mainPage.open();
        await mainPage.clickFeedbackLink();
        await mainPage.selectFile("/Users/bob/Desktop/1.png", "/Users/bob/Desktop/2.exe");
        expect(await mainPage.verifyFileTypeError()).toEqual("Расширение загружаемого файла нет в списке разрешенных");
    });
});
const mainPage = require("../../page_objects/main.page");
const productsPage = require("../../page_objects/products.list.page");

describe("Hotline Search", () => {
    it("Advanced search product successfull", async () => {
        await mainPage.openLink("https://hotline.ua/tourism/snaryazhenie-dlya-alpinizma/ ");
        await productsPage.checkFilterCheckbox();
        await productsPage.enterMaxPrice("1618");
        await productsPage.enterMinPrice("1200");
        await productsPage.clickOkButton();
        expect(await productsPage.verifyFoundItem()).toContain("Petzl Rocpec P26");
    });
});
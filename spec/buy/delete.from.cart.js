const mainPage = require("../../page_objects/main.page");
const productListPage = require("../../page_objects/products.list.page");
const itemPage = require("../../page_objects/item.page");
const cartPage = require("../../page_objects/cart.page.js");

describe("Hotline - Buy goods", () => {
    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    it("Add to cart", async () => {
        await mainPage.open();
        await productListPage.addToCart("3");
        await itemPage.clickBuyNowButton();
        await mainPage.openGoodsCatalog();
        await productListPage.addToCart("4");
        await itemPage.clickBuyNowButton();
        await mainPage.openGoodsCatalog();
        await productListPage.addToCart("5");
        await itemPage.clickBuyNowButton();
        await mainPage.clickCartIcon();
        await mainPage.clickDeleteIcon();
        await browser.sleep(3000);
        await mainPage.clickGoToCart();
        await cartPage.clickTrashIcon();
        await mainPage.clickHotline();
        expect(await mainPage.checkCartCounter()).toEqual("1");
    });
});
const mainPage = require("../../page_objects/main.page");
const productListPage = require("../../page_objects/products.list.page");
const itemPage = require("../../page_objects/item.page");
const cartPage = require("../../page_objects/cart.page.js");

describe("Hotline - Buy goods", () => {
    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    });

    it("Delete from cart", async () => {
        await mainPage.open();
        await productListPage.addToCart(3);
        await itemPage.clickBuyNowButton();
        await mainPage.waitCartAnimation();
        await mainPage.openGoodsCatalog();
        await productListPage.addToCart(4);
        await itemPage.clickBuyNowButton();
        await mainPage.waitCartAnimation();
        await mainPage.openGoodsCatalog();
        await productListPage.addToCart(5);
        await itemPage.clickBuyNowButton();
        await mainPage.waitCartAnimation();
        await mainPage.clickCartIcon();
        await mainPage.clickDeleteIcon();
        await mainPage.clickGoToCart();
        await cartPage.clickTrashIcon();
        await mainPage.clickHotline();
        await mainPage.waitCartAnimation();
        expect(await mainPage.checkCartCounter()).toEqual("1");
    });
});
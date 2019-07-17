const mainPage = require("../../page_objects/main.page");
const productListPage = require("../../page_objects/products.list.page");
const itemPage = require("../../page_objects/item.page");
const cartPage = require("../../page_objects/cart.page");

describe("Hotline - Buy goods", () => {
    it("Add to cart", async () => {
        await mainPage.open();
        await productListPage.addToCart("3");
        await itemPage.clickBuyNowButton();
    });

    it("Add to cart", async () => {
        await mainPage.openGoodsCatalog();
        await productListPage.addToCart("4");
        await itemPage.clickBuyNowButton();
    });

    it("Add to cart", async () => {
        await mainPage.openGoodsCatalog();
        await productListPage.addToCart("5");
        await itemPage.clickBuyNowButton();
    });

    it("Add to cart", async () => {
        await mainPage.clickCartIcon();
        await mainPage.clickDeleteIcon();
        await mainPage.clickGoToCart();
        await cartPage.clickTrashIcon();
        await mainPage.clickHotline();
        expect(await mainPage.checkCartCounter()).toEqual("1");
    });
});
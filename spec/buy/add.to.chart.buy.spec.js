const mainPage = require("../../page_objects/main.page");
const loginPage = require("../../page_objects/login.page");
const productListPage = require("../../page_objects/products.list.page");
const itemPage = require("../../page_objects/item.page");
const cartPage = require("../../page_objects/cart.page");
const checkoutPage = require("../../page_objects/checkout.page");

xdescribe("Hotline - Buy goods", () => {
    it("Add to chart and buy", async () => {
        await mainPage.open();
        await mainPage.clickLoginButton();
        await loginPage.login("solovko_av@ukr.net", "0682326605");
        await loginPage.clickSubmit();
        await productListPage.addToCart();
        await itemPage.clickBuyNowButton();
        await cartPage.openWayofDeliveryDropDown(`"До склада"`);
        await cartPage.openNovaPoshtaDropDown(`"Пластова"`);
        await cartPage.clickOrderButton();
        expect(await checkoutPage.verifyCheckoutHeader()).toContain("Оформление и оплата вашего заказа");
    });
});
const mainPage = require("../../page_objects/main.page");
const loginPage = require("../../page_objects/login.page");
const productListPage = require("../../page_objects/products.list.page");
const itemPage = require("../../page_objects/item.page");
const basketPage = require("../../page_objects/basket.page");
const checkoutPage = require("../../page_objects/checkout.page");

describe("Hotline - Buy goods", () => {
    it("Add to chart and buy", async () => {
        await mainPage.open();
        await mainPage.clickLoginButton();
        await loginPage.login("solovko_av@ukr.net", "0682326605");
        await loginPage.clickSubmit();
        await mainPage.hoverDachaSad();
        await mainPage.clickPollFountain();
        await mainPage.clickPumps();
        await productListPage.checkCheckbox();
        await productListPage.clicAddToChart();
        await itemPage.clickBuyNowButton();
        await basketPage.openWayofDeliveryDropDown(`"До склада"`);
        await basketPage.openNovaPoshtaDropDown(`"Пластова"`);
        await basketPage.clickOrderButton();
        expect(await checkoutPage.verifyCheckoutHeader()).toContain("Оформление и оплата вашего заказа");
    });
});
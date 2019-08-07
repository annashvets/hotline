/* eslint-disable no-undef */
/* eslint-disable max-len */
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let DropDown = require("../elements/drop.down.element");

let EC = protractor.ExpectedConditions;

let wayOfDeliveryDropDown = `.form-item [class="field m_b-sm"]`;
let novaPoshtaDropDownLocator = `.form-item [name="warehouseNP"]`;
let orderButtonLocator = `.m_b-md .btn-blue`;
let trashIconCartPageLocator = `[class="viewbox viewbox-striped"] div:nth-of-type(4) > i`;

class CartPage extends BasePage {
    getWayOfDeliveryDroDown() {
        return new DropDown(element(by.css(wayOfDeliveryDropDown)), "Way Of Delivery drop-down");
    }

    getNovaPoshtaDropDown() {
        return new DropDown(element(by.css(novaPoshtaDropDownLocator)), "Nova Poshta office drop-down");
    }

    getOrderButton() {
        return new Button(element(by.css(orderButtonLocator)), "Order button");
    }

    getTrashIconCartPage() {
        return new Button(element(by.css(trashIconCartPageLocator)), "Trash icon on Cart page");
    }

    async openWayofDeliveryDropDown(item) {
        await allure.createStep("Open Way Of Delivery drop-down", async () => {
            await this.getWayOfDeliveryDroDown().click();
            await this.getWayOfDeliveryDroDown().selectItem(item);
        })();
    }

    async openNovaPoshtaDropDown(item) {
        await allure.createStep("Open Nova Poshta Offices drop-down", async () => {
            await this.getNovaPoshtaDropDown().click();
            await this.getNovaPoshtaDropDown().selectItem(item);
        })();
    }

    async clickOrderButton() {
        await allure.createStep("Click on Order button", async () => {
            await browser.executeScript("arguments[0].scrollIntoView()", this.getOrderButton().getProtractorElement()).then(
                async () => {
                    await this.getOrderButton().click();
                }
            );
        })();
    }

    async clickTrashIcon() {
        await browser.wait(EC.visibilityOf(this.getTrashIconCartPage().getProtractorElement()), 3000);
        await allure.createStep("Click on Trash icon", async () => {
            await this.getTrashIconCartPage().click();
        })();
    }
}

module.exports = new CartPage();
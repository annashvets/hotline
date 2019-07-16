/* eslint-disable max-len */
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let DropDown = require("../elements/drop.down.element");

let wayOfDeliveryDropDown = `.form-item [class="field m_b-sm"]`;
let novaPoshtaDropDownLocator = `.form-item [name="warehouseNP"]`;
let orderButtonLocator = `.m_b-md .btn-blue`;

class BasketPage extends BasePage {
    getWayOfDeliveryDroDown() {
        return new DropDown(element(by.css(wayOfDeliveryDropDown)), "Way Of Delivery drop-down");
    }

    getNovaPoshtaDropDown() {
        return new DropDown(element(by.css(novaPoshtaDropDownLocator)), "Nova Poshta office drop-down");
    }

    getOrderButton() {
        return new Button(element(by.css(orderButtonLocator)), "Order button");
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
}

module.exports = new BasketPage();
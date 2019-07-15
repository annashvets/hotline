/* eslint-disable max-len */
let BasePage = require("./base.page");
let Button = require("../elements/button.element");
let DropDown = require("../elements/drop.down.element");

let wayOfDeliveryDropDown = `.form-item [class="field m_b-sm"]`;
let wayOfDeliveryItemLocator = `//option[contains(., "До склада Новой почты")]`;
let novaPoshtaDropDownLocator = `.form-item [name="warehouseNP"]`;
let secondItemNovaPoshtaDropDownLOcator = `//option[contains(., "Пластова")]`;
let orderButtonLocator = `.m_b-md .btn-blue`;


class BasketPage extends BasePage {
    getWayOfDeliveryDroDown() {
        return new DropDown(element(by.css(wayOfDeliveryDropDown)), "Way Of Delivery drop-down");
    }

    getWeyOfDeliveryItem() {
        return new DropDown(element(by.xpath(wayOfDeliveryItemLocator)), "Drop Down item");
    }

    getNovaPoshtaDropDown() {
        return new DropDown(element(by.css(novaPoshtaDropDownLocator)), "Nova Poshta office drop-down");
    }

    getSecondItemNovaPoshtaDropDown() {
        return new DropDown(element(by.xpath(secondItemNovaPoshtaDropDownLOcator)), "Second item of drop-down");
    }

    getOrderButton() {
        return new Button(element(by.css(orderButtonLocator)), "Order button");
    }

    async openWayofDeliveryDropDown() {
        await allure.createStep("Open Way Of Delivery drop-down", async () => {
            await this.getWayOfDeliveryDroDown().click();
        })();
    }

    async selectWayOfDeiveryItem() {
        await allure.createStep("Select Nova Poshta Item", async () => {
            await this.getWeyOfDeliveryItem().click();
        })();
    }

    async openNovaPoshtaDropDown() {
        await allure.createStep("Open Nova Poshta Offices drop-down", async () => {
            await this.getNovaPoshtaDropDown().click();
        })();
    }

    async selectItemNovaPoshtaDropDown() {
        await allure.createStep("Select second item of Nova Poshta Offices", async () => {
            await this.getSecondItemNovaPoshtaDropDown().click();
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
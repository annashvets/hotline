let BasePage = require("./base.page");
let Button = require("../elements/button.element");


let buyNowButtonLocator = `[class="btn-blue m_b-sm"]`;

class ItemsPage extends BasePage {
    getBuyNowButton() {
        return new Button(element(by.css(buyNowButtonLocator)), "Buy now button");
    }

    async clickBuyNowButton() {
        await allure.createStep("Click on Buy Now Button", async () => {
            await this.getBuyNowButton().click();
        })();
    }
}

module.exports = new ItemsPage();
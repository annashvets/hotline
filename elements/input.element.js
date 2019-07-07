let BaseElement = require("./base.element");

class Input extends BaseElement {
    async sendKeys(text) {
        await this.protractorElement.sendKeys(text);
    }
}

module.exports = Input;
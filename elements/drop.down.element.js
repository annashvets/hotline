let BaseElement = require("./base.element");

class DropDown extends BaseElement {
    async open() {
        console.log(`Open drop-down ${this.elementName}`);
        await this.protractorElement.click();
    }

    async selectItem(itemName) {
        this.protractorElement = `//option[contains(., ${itemName})]`;
        await element(by.xpath(this.protractorElement)).click();
    }
}

module.exports = DropDown;

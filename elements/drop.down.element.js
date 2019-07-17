let BaseElement = require("./base.element");
let Button = require("./button.element");

class DropDown extends BaseElement {
    async open() {
        console.log(`Open drop-down ${this.elementName}`);
        await this.click();
    }

    async selectItem(itemName) {
        this.protractorElement = `//option[contains(., ${itemName})]`;
        await new Button(element(by.xpath(this.protractorElement)), "Dop-down item").click();
    }
}

module.exports = DropDown;

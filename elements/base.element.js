class BaseElement {
    constructor(protractorElement, name) {
        this.protractorElement = protractorElement;
        this.elementName = name;
    }

    getProtractorElement() {
        return this.protractorElement;
    }

    async click() {
        console.log(`Click on ${this.elementName}`);
        await this.protractorElement.click();
    }

    async getText() {
        return await this.protractorElement.getText();
    }

    async clear() {
        await this.protractorElement.clear();
    }

    async isChecked() {
        console.log("Verifying if checkbox is checked");
        if (await this.protractorElement.getAttribute('checked')) {
            return true;
        } return false;
    }
}

module.exports = BaseElement;

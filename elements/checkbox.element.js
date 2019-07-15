let BaseElement = require("./base.element");

class Checkbox extends BaseElement {
    async isChecked() {
        console.log("Verifying if checkbox is checked");
        if (await this.protractorElement.getAttribute('checked') === true) {
            return true;
        } return false;
    }

    async check() {
        let verify = this.isChecked();
        if (await verify === true) {
            console.log("Checkbox is checked");
        } else await this.protractorElement.click();
    }

    async uncheck() {
        let verify = this.isChecked();
        if (await verify === true) {
            await this.protractorElement.click();
        } else console.log("Checkbox is unchecked");
    }
}


module.exports = Checkbox;

let BaseElement = require("./base.element");

class Checkbox extends BaseElement {
    async check() {
        if (await this.isChecked()) {
            console.log("Checkbox is checked");
        } else await this.click();
    }

    async uncheck() {
        if (await this.isChecked()) {
            await this.click();
        } else console.log("Checkbox is unchecked");
    }
}


module.exports = Checkbox;

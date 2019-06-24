let BaseElement = require("./base.element");

class Button extends BaseElement{

    async sendKeys(text){
        await this.protractorElement.sendKeys(text);
        }

}

module.exports = Button;

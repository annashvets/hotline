class BaseElement{
    constructor(protractorElement, name){
        this.protractorElement = protractorElement;
        this.elementName = name;
    }

    getProtractorElement(){
        return this.protractorElement;
    }

    async click(){
        console.log(`Click on ${this.elementName}`);
        await this.protractorElement.click();
    }

    async getText(){
        return await this.protractorElement.getText();
    }


}

module.exports = BaseElement;

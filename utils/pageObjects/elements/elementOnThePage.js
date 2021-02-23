const basePage = require ('../basePage/basePage.js');
const { browser } = require('protractor');

class elementOnThePage {
    constructor (selector) {
        this.element = element(by.css(selector));
    }

    click() {
        return this.element.click();
    }

    sendKeys(value) {
        return this.element.sendKeys(value);
    }

    isPresent() {
        return this.element.isPresent();
    }
}

module.exports = elementOnThePage;
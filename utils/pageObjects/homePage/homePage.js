const { browser, element } = require('protractor');
const basePage = require ('../basePage/basePage.js');
const elementOnThePage = require ('../elements/elementOnThePage.js');

class homePage extends basePage {
    constructor() {
        super();
    }

    open() {
        return super.open('https://www.epam.com/');
    }

    get contactUsButton() {
        return new elementOnThePage('.cta-button-ui.cta-button--envelope.header__control')
    }
}

module.exports = homePage;
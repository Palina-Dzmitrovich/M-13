const { browser } = require("protractor");

class basePage {
    constructor() {
        
    }

    wait(waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    open(url) {
        return browser.get(url);
    }

    switchToFrame(id) {
        return browser.switchTo().frame(id);
    }

    switchToDefault() {
        return browser.switchTo().defaultContent();
    }

    getTitle() {
        return browser.getTitle();
    }
}

module.exports = basePage;
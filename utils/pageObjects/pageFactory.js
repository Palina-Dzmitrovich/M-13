const basePage = require('./basePage/basePage.js');
const homePage = require('./homePage/homePage.js');
const contactUs = require('./contactUs/contactUs.js');

class pageFactory {
    static getPage(pageName) {
        switch(pageName) {
            case 'home':
                return new homePage();
            case 'base':
                return new basePage();
            case 'contact':
                return new contactUs();
        }
    }
    
} 

module.exports = pageFactory;
const { browser, element } = require('protractor');
const basePage = require ('../basePage/basePage.js');
const elementOnThePage = require ('../elements/elementOnThePage.js');

class contactUs extends basePage {
    constructor() {
        super();
    }

    open() {
        return super.open('https://www.epam.com/');
    }

    get mainHeader() {
        return new elementOnThePage('.title-ui.title--center.title--mixed-case')
    }

    get phoneField() {
        return new elementOnThePage('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone');
    }

    get cookiesDisclaimer() {
        return new elementOnThePage('.button-ui.bg-color-light-blue.cookie-disclaimer__button');
    }

    get errorMessage() {
        return new elementOnThePage('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone-error');
    }

    get companyDropdown() {
        return new elementOnThePage('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_company');
    }
}

module.exports = contactUs;
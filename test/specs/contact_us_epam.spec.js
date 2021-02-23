const pageFactory = require ('../../utils/pageObjects/pageFactory.js');
const chai = require('chai');
const { browser } = require('protractor');
const { protractor } = require('protractor/built/ptor');

const expect = chai.expect;

describe('"Contact us" menu', function() {

    beforeEach(function() {

        browser.waitForAngularEnabled(false);

    })
   
    it('Should open after clicking the envelope icon', async function() {
      
        const homePage = await pageFactory.getPage('home');

        await homePage.open();

        await homePage.wait(2000);
        await homePage.contactUsButton.click();

        expect(await homePage.getCurrentUrl()).to.equal('https://www.epam.com/about/who-we-are/contact');

    });

    it('Should have title "Learn more about EPAM and Contact Us | EPAM"', async function() {
      
        const homePage = await pageFactory.getPage('home');
        const contactUs = await pageFactory.getPage('contact');

        await homePage.open();

        await homePage.wait(2000);
        await homePage.contactUsButton.click();

        expect(await contactUs.getTitle()).to.equal('Learn more about EPAM and Contact Us | EPAM');        

    });

    it('Should not accept letters as a phone number', async function() {
      
        const homePage = await pageFactory.getPage('home');
        const contactUs = await pageFactory.getPage('contact');

        await homePage.open();

        await homePage.wait(2000);
        await homePage.contactUsButton.click();

        await contactUs.cookiesDisclaimer.click();

        await browser.executeScript("document.querySelector('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email').scrollIntoView(true);");
        
        await contactUs.wait(2000);
        await contactUs.phoneField.sendKeys('www');       

        await contactUs.wait(1000);

        await contactUs.companyDropdown.click();

        await contactUs.wait(2000);

        expect(await contactUs.errorMessage.isPresent()).to.equal(true);

    });

  });
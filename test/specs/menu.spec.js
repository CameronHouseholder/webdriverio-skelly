import { expect } from 'chai';
import allureReporter from '@wdio/allure-reporter';
import MenuPage from '../pages/menu.page';
import CheckOutPage from '../pages/check-out.page';

describe('menu page tests', () => {
    before(() => {
        MenuPage.open();
    });

    beforeEach(() => {
        allureReporter.addFeature('menu page tests');
        allureReporter.addSeverity('critical');
    });

    it('should have the correct page header', () => {
        const description = 'check the page header';
        allureReporter.addDescription(description);
        expect(MenuPage.getPageHeader()).to.equal(MenuPage.pageHeader, description);
    });

    describe('check out buttons should be enabled', () => {
        it('should have the check out green tea button enabled', () => {
            const description = 'check the check out green tea button is enabled';
            allureReporter.addDescription(description);
            expect(MenuPage.btnCheckOutGreenTeaIsEnabled()).to.equal(true, description);
        });

        it('should have the check out red tea button enabled', () => {
            const description = 'check the check out red tea button is enabled';
            allureReporter.addDescription(description);
            expect(MenuPage.btnCheckOutRedTeaIsEnabled()).to.equal(true, description);
        });

        it('should have the check out oolong tea button enabled', () => {
            const description = 'check the check out oolong tea button is enabled';
            allureReporter.addDescription(description);
            expect(MenuPage.btnCheckOutOolongTeaIsEnabled()).to.equal(true, description);
        });
    });

    describe('check that check out page shows after clicking check out buttons', () => {
        beforeEach(() => {
            MenuPage.open();
        });

        it('should show the check out page after clicking the check out green tea button', () => {
            const description = 'check the check out page shows after clicking the button';
            allureReporter.addDescription(description);
            MenuPage.clickCheckOutGreenTea();
            const result = CheckOutPage.getUrlAndTitle();
            expect(result.url).to.equal(browser.options.baseUrl + CheckOutPage.pageUrl);
            expect(result.title).to.equal(CheckOutPage.pageTitle);
        });

        it('should show the check out page after clicking the check out red tea button', () => {
            const description = 'check the check out page shows after clicking the button';
            allureReporter.addDescription(description);
            MenuPage.clickCheckOutRedTea();
            const result = CheckOutPage.getUrlAndTitle();
            expect(result.url).to.equal(browser.options.baseUrl + CheckOutPage.pageUrl);
            expect(result.title).to.equal(CheckOutPage.pageTitle);
        });

        it('should show the check out page after clicking the check out oolong tea button', () => {
            const description = 'check the check out page shows after clicking the button';
            allureReporter.addDescription(description);
            MenuPage.clickCheckOutOolongTea();
            const result = CheckOutPage.getUrlAndTitle();
            expect(result.url).to.equal(browser.options.baseUrl + CheckOutPage.pageUrl);
            expect(result.title).to.equal(CheckOutPage.pageTitle);
        });
    });
});

import { expect } from 'chai';
import allureReporter from '@wdio/allure-reporter';
import HomePage from '../pages/home.page';
import OurPassionPage from '../pages/our-passion.page';
import MenuPage from '../pages/menu.page';
import NavMenuPage from '../pages/nav-menu.page';

describe('nav menu page tests', () => {
    before(() => {
        // HomePage.open();
    });

    beforeEach(() => {
        allureReporter.addFeature('nav menu page tests');
        allureReporter.addSeverity('critical');
        HomePage.open();
    });

    it('should display the welcome link in nav menu', () => {
        allureReporter.addDescription('check welcome link displays in nav menu');
        expect(NavMenuPage.lnkWelcomeIsDisplayed()).to.equal(true, 'check welcome link displayed');
    });

    it('should display the welcome page after clicking the welcome link', () => {
        allureReporter.addDescription('check welcome page displays');
        NavMenuPage.clickWelcome();
        const result = HomePage.getUrlAndTitle();
        expect(result.url).to.equal(browser.options.baseUrl + HomePage.pageUrl, 'check page url');
        expect(result.title).to.equal(HomePage.pageTitle, 'check page title');
    });

    it('should display the our passion link in nav menu', () => {
        allureReporter.addDescription('check our passion link displays in nav menu');
        expect(NavMenuPage.lnkOurPassionIsDisplayed()).to.equal(true, 'check our passion link displayed');
    });

    it('should display the our passion page after clicking the our passion link', () => {
        allureReporter.addDescription('check our passion page displays');
        NavMenuPage.clickOurPassion();
        const result = OurPassionPage.getUrlAndTitle();
        expect(result.url).to.equal(browser.options.baseUrl + OurPassionPage.pageUrl, 'check page url');
        expect(result.title).to.equal(OurPassionPage.pageTitle, 'check page title');
    });

    it('should display the menu link in nav menu', () => {
        allureReporter.addDescription('check menu link displays in nav menu on the home page');
        expect(NavMenuPage.lnkMenuIsDisplayed()).to.equal(true, 'check menu link displays in nav menu');
    });

    it('should display the menu page after clicking the menu link', () => {
        allureReporter.addDescription('check menu page displays');
        NavMenuPage.clickMenu();
        const result = MenuPage.getUrlAndTitle();
        expect(result.url).to.equal(browser.options.baseUrl + MenuPage.pageUrl, 'check page url');
        expect(result.title).to.equal(MenuPage.pageTitle, 'check page title');
    });
});

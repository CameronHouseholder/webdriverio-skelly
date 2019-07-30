import { expect } from 'chai';
import allureReporter from '@wdio/allure-reporter';
import HomePage from '../pages/home.page';
import NavMenuPage from '../pages/nav-menu.page';
import OurPassionPage from '../pages/our-passion.page';

describe('our passion page tests', () => {
    beforeEach(() => {
        allureReporter.addFeature('our passion page tests');
        allureReporter.addSeverity('normal');
        HomePage.open();
    });

    it('should display an our passion link in the side navigation menu', () => {
        allureReporter.addDescription('check that the our passion link is displayed in the side navigation menu');
        expect(NavMenuPage.lnkOurPassionIsDisplayed).to.equal(true, 'check our passion link is displayed');
    });

    it('should have the correct page title', () => {
        allureReporter.addDescription('check that the page title is correct for the our passion page');
        NavMenuPage.clickOurPassion();
        expect(OurPassionPage.getTitle()).to.equal(OurPassionPage.pageTitle, 'check page title');
    });

    it('should have the correct our passion header', () => {
        allureReporter.addDescription('check that the our passion header is correct');
        NavMenuPage.clickOurPassion();
        expect(OurPassionPage.getOurPassion()).to.equal(OurPassionPage.ourPassionHeader, 'check our passion header');
    });

    it('should have the correct the experts header', () => {
        allureReporter.addDescription('check that the experts header is correct');
        NavMenuPage.clickOurPassion();
        expect(OurPassionPage.getTheExperts()).to.equal(OurPassionPage.theExpertsHeader, 'check the experts header');
    });
});

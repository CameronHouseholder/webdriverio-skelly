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

    it('should have the correct our passion header', () => {
        allureReporter.addDescription('check that the our passion header is correct');
        NavMenuPage.clickOurPassion();
        expect(OurPassionPage.getOurPassionHeader()).to.equal(OurPassionPage.ourPassionHeader, 'check the our passion header');
    });

    it('should have the correct the experts header', () => {
        allureReporter.addDescription('check that the experts header is correct');
        NavMenuPage.clickOurPassion();
        expect(OurPassionPage.getTheExpertsHeader()).to.equal(OurPassionPage.theExpertsHeader, 'check the experts header');
    });
});

import assert from 'assert';
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

    it('should show a our passion link in the side navigation menu', () => {
        assert.strictEqual(NavMenuPage.lnkOurPassionIsDisplayed(), true, 'our passion link is displayed');
    });

    it('should show the our passion page', () => {
        allureReporter.addDescription('checks that the our passion page displays after clicking the our passion link in the navigation menu');
        NavMenuPage.clickOurPassion();
        assert.strictEqual(OurPassionPage.getTitle(), OurPassionPage.pageTitle, 'our passion page title');
        assert.strictEqual(OurPassionPage.getOurPassion(), 'Our Passion', 'our passion header');
        assert.strictEqual(OurPassionPage.getTheExperts(), 'The Experts', 'the experts header');
    });
});

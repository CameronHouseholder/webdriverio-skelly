import assert from 'assert';
import allureReporter from '@wdio/allure-reporter';
import HomePage from '../pages/home.page';
import NavMenuPage from '../pages/nav-menu.page';
import OurPassionPage from '../pages/our-passion.page';
import HomeData from '../data/home.data';

describe('passion tea company smoke tests', () => {
    beforeAll(() => {
        HomePage.open();
    });

    beforeEach(() => {
        allureReporter.addFeature('passion tea company smoke tests');
        allureReporter.addSeverity('critical');
    });

    afterEach(() => {
    });

    it('should have the correct page title', () => {
        allureReporter.addDescription('checks that the page title is equal to Welcome');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Welcome', 'page title');
    });

    it('should have the correct page header', () => {
        allureReporter.addDescription('checks that the page header contains the word tea');
        const header = HomePage.getHeader();
        assert.ok(header.indexOf('tea') > -1, 'page header');
    });

    it('should have the correct teas listed as editor collections', () => {
        allureReporter.addDescription('checks that the correct teas are listed in the editor collections section');
        const teas = HomeData.editorCollectionsTeas;
        HomePage.lblEditorCollections.forEach(elem => assert.ok(teas.indexOf(elem.getText()) > -1));
    });

    it('should show the our passion page', () => {
        allureReporter.addDescription('checks that the our passion page displays after clicking the our passion link in the navigation menu');
        NavMenuPage.clickOurPassion();
        const pageTitle = OurPassionPage.getTitle();
        const ourPassionHeader = OurPassionPage.getOurPassion();
        const theExpertsHeader = OurPassionPage.getTheExperts();
        assert.ok(pageTitle, OurPassionPage.pageTitle, 'our passion page title');
        assert.ok(ourPassionHeader, 'Our Passion', 'our passion header');
        assert.ok(theExpertsHeader, 'The Experts', 'the experts header');
    });
});

import assert from 'assert';
import allureReporter from '@wdio/allure-reporter';
import HomePage from '../pages/home.page';
import HomeData from '../data/home.data';

describe('passion tea company home page', () => {
    beforeAll(() => {
        HomePage.open();
    });

    beforeEach(() => {
        allureReporter.addFeature('passion tea company home page');
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
        assert.ok(header.indexOf('tea') < -1, 'page header');
    });

    it('should have the correct teas listed as editor collections', () => {
        allureReporter.addDescription('checks that the correct teas are listed in the editor collections section');
        const teas = HomeData.editorCollectionsTeas;
        HomePage.lblEditorCollections.forEach(elem => assert.ok(teas.indexOf(elem.getText()) > -1));
    });

    it('should show the our passion page', () => {
        allureReporter.addDescription('checks that the our passion page displays after clicking the our passion link in the navigation menu');
        
    });
});

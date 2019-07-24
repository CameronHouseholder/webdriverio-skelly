import assert from 'assert';
import HomePage from '../pages/home.page';
import HomeData from '../data/home.data';

describe('passion tea company page', () => {
    beforeAll(() => {
        HomePage.open();
    });

    it('should have the correct page title', () => {
        const title = browser.getTitle();
        assert.strictEqual(title, 'Welcome', 'page title');
    });

    it('should have the correct page header', () => {
        const header = HomePage.lblHeader.getText();
        assert.ok(header.indexOf('tea') > -1, 'page header');
    });

    it('should have the correct teas listed as editor collections', () => {
        const teas = HomeData.editorCollectionsTeas;
        HomePage.lblEditorCollections.forEach(elem => assert.ok(teas.indexOf(elem.getText()) > -1));
    });
});

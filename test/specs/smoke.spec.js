import assert from 'assert';
import HomePage from '../pages/home.page';
import HomeData from '../data/home.data';

describe('passion tea company page', function() {
    beforeAll(function() {
        HomePage.open();
    });

    it('should have the correct page title', function() {
        const title = browser.getTitle();
        assert.strictEqual(title, "Welcome", "page title");
    });

    it('should have the correct page header', function() {
        const header = HomePage.lblHeader.getText();
        assert.ok(header.indexOf("tea") > -1, 'page header');
    });

    it('should have the correct editor collections', function() {
        HomePage.lblEditorCollections.forEach(elem => assert.ok(HomeData.editorCollections.indexOf(elem.getText()) > -1));
    });
});
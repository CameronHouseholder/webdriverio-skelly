import { expect } from 'chai';
import allureReporter from '@wdio/allure-reporter';
import HomePage from '../pages/home.page';

describe('home page tests', () => {
    before(() => {
        HomePage.open();
    });

    beforeEach(() => {
        allureReporter.addFeature('home page tests');
        allureReporter.addSeverity('critical');
    });

    it('should have the correct page title', () => {
        allureReporter.addDescription('checks that the page title for the home page is correct');
        expect(HomePage.getTitle()).to.equal(HomePage.pageTitle, 'check page title');
    });

    it('should have the correct page header', () => {
        allureReporter.addDescription('checks that the page header is correct');
        expect(HomePage.getHeader()).to.contain(HomePage.pageHeader, 'check page header');
    });

    it('should have the correct teas listed as editor collections', () => {
        allureReporter.addDescription('checks that the correct teas are listed in the editor collections section');
        HomePage.getEditorCollections().forEach(text => expect(HomePage.editorCollections.indexOf(text) > -1).to.equal(true, 'check tea editor collections'));
    });
});

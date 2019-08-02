import { expect } from 'chai';
import allureReporter from '@wdio/allure-reporter';
import HomePage from '../pages/home.page';
import NavMenuPage from '../pages/nav-menu.page';
import MenuPage from '../pages/menu.page';

describe('menu page tests', () => {
    beforeEach(() => {
        allureReporter.addFeature('menu page tests');
        allureReporter.addSeverity('critical');
        HomePage.open();
    });

    it('should have the correct page header', () => {
        allureReporter.addDescription('check the page header');
        NavMenuPage.clickMenu();
        expect(MenuPage.getPageHeader()).to.equal(MenuPage.pageHeader, 'check page header');
    });
});

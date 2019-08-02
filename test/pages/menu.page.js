import Page from './page';

class MenuPage extends Page {
    /**
     * page variables
     */
    get pageUrl() { return 'menu.html'; }

    get pageTitle() { return 'Menu'; }

    get pageHeader() { return 'Menu'; }

    /**
     * elements
     */
    get lblPageHeader() { return $('.txt h1'); }

    get btnCheckOutGreenTea() { return $('#wsb-button-00000000-0000-0000-0000-000451955160'); }

    get btnCheckOutRedTea() { return $('#wsb-button-00000000-0000-0000-0000-000451959280'); }

    get btnCheckOutOolongTea() { return $('#wsb-button-00000000-0000-0000-0000-000451961556'); }

    /**
     * Navigates to the menu page
     */
    open() {
        super.open(this.pageUrl);
    }

    /**
     * Wait for the page header label to display and return the text
     * @return {string} page header label text
     */
    getPageHeader() {
        return this.getElemText(this.lblPageHeader);
    }
}

export default new MenuPage();

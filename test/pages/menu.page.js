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

    /**
     * Click the check out green tea button
     */
    clickCheckOutGreenTea() {
        this.clickElem(this.btnCheckOutGreenTea);
    }

    /**
     * Determine if the check out green tea button is enabled and return a boolean
     * @returns {boolean} true if the check out green tea button is enabled
     */
    btnCheckOutGreenTeaIsEnabled() {
        return this.elemIsEnabled(this.btnCheckOutGreenTea);
    }

    /**
     * Click the check out red tea button
     */
    clickCheckOutRedTea() {
        this.clickElem(this.btnCheckOutRedTea);
    }

    /**
     * Determine if the check out red tea button is enabled and return a boolean
     * @returns {boolean} true if the check out red tea button is enabled
     */
    btnCheckOutRedTeaIsEnabled() {
        return this.elemIsEnabled(this.btnCheckOutRedTea);
    }

    /**
     * Click the check out oolong tea button
     */
    clickCheckOutOolongTea() {
        this.clickElem(this.btnCheckOutOolongTea);
    }

    /**
     * Determine if the check out oolong tea button is enabled and return a boolean
     * @returns {boolean} true if the check out oolong tea button is enabled
     */
    btnCheckOutOolongTeaIsEnabled() {
        return this.elemIsEnabled(this.btnCheckOutOolongTea);
    }
}

export default new MenuPage();

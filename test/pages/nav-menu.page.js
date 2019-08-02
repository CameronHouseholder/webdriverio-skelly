import Page from './page';

class NavMenuPage extends Page {
    /**
     * elements
     */
    get lnkWelcome() { return $('a[href="welcome.html"]'); }

    get lnkOurPassion() { return $('a[href="our-passion.html"]'); }

    get lnkMenu() { return $('a[data-url="menu.html"]'); }

    open() {
        super.open('');
    }

    /**
     * Click the welcome link
     */
    clickWelcome() {
        this.clickElem(this.lnkWelcome);
    }

    /**
     * Determine if the welcome link is displayed in the DOM and return a boolean
     * @returns {boolean} true if the welcome link is displayed
     */
    lnkWelcomeIsDisplayed() {
        return this.elemIsDisplayed(this.lnkWelcome);
    }

    /**
     * Click the our passion link
     */
    clickOurPassion() {
        this.clickElem(this.lnkOurPassion);
    }

    /**
     * Determine if the our passion link is displayed in the DOM and return a boolean
     * @returns {boolean} true if the our passion link is displayed
     */
    lnkOurPassionIsDisplayed() {
        return this.elemIsDisplayed(this.lnkOurPassion);
    }

    /**
     * Click the menu link
     */
    clickMenu() {
        this.clickElem(this.lnkMenu);
    }

    /**
     * Determine if the menu link is displayed in the DOM and return a boolean
     * @returns {boolean} true if the menu link is displayed
     */
    lnkMenuIsDisplayed() {
        return this.elemIsDisplayed(this.lnkMenu);
    }
}

export default new NavMenuPage();

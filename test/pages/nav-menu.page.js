import Page from './page';

class NavMenuPage extends Page {
    /**
     * elements
     */
    get lnkWelcome() { return $('a[href="welcome.html"]'); }

    get lnkOurPassion() { return $('a[href="our-passion.html"]'); }

    open() {
        super.open('');
    }

    clickWelcome() {
        this.clickElem(this.lnkWelcome);
    }

    clickOurPassion() {
        this.clickElem(this.lnkOurPassion);
    }

    lnkOurPassionIsDisplayed() {
        return this.elemIsDisplayed(this.lnkOurPassion);
    }
}

export default new NavMenuPage();

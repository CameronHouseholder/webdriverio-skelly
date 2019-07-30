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
        this.lnkWelcome.click();
    }

    clickOurPassion() {
        this.lnkOurPassion.click();
    }
}

export default new NavMenuPage();

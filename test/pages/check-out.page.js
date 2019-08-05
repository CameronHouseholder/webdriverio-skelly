import Page from './page';

class CheckOutPage extends Page {
    /**
     * page variables
     */
    get pageUrl() { return 'check-out.html'; }

    get pageTitle() { return 'Check Out'; }

    get pageHeader() { return 'Pay with Credit Card or Log In'; }

    /**
     * elements
     */
    get lblPageHeader() { return $('span[style="color:#0000FF;"] strong'); }

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

export default new CheckOutPage();

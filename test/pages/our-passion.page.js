import Page from './page';

class OurPassionPage extends Page {
    /**
     * page variables
     */
    get pageUrl() { return 'our-passion.html'; }

    get pageTitle() { return 'Our Passion'; }

    get ourPassionHeader() { return 'Our Passion'; }

    get theExpertsHeader() { return 'The Experts'; }

    /**
     * elements
     */
    get lblOurPassionHeader() { return $('.txt h1'); }

    get lblTheExpertsHeader() { return $('.txt h2.editor_h1'); }

    /**
     * Navigates to the our passion page
     */
    open() {
        super.open(this.pageUrl);
    }

    /**
     * Wait for the our passion header label to display and return the text
     * @return {string} our passion header label text
     */
    getOurPassionHeader() {
        return this.getElemText(this.lblOurPassionHeader);
    }

    /**
     * Wait for the experts header label to display and return the text
     * @return {string} the experts header label text
     */
    getTheExpertsHeader() {
        return this.getElemText(this.lblTheExpertsHeader);
    }
}

export default new OurPassionPage();

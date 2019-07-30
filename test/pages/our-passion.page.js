import Page from './page';

class OurPassionPage extends Page {
    /**
     * page variables
     */
    get pageTitle() { return 'Our Passion'; }

    /**
     * elements
     */
    get lblOurPassion() { return $('.txt h1'); }

    get lblTheExperts() { return $('.txt h2.editor_h1'); }

    /**
     * Navigates to the our passion page
     */
    open() {
        super.open('our-passion.html');
    }

    /**
     * Wait for the our passion label to display and return the text
     * @return {string} our passion label text
     */
    getOurPassion() {
        return this.getElemText(this.lblOurPassion);
    }

    /**
     * Wait for the experts label to display and return the text
     * @return {string} the experts label text
     */
    getTheExperts() {
        return this.getElemText(this.lblTheExperts);
    }
}

export default new OurPassionPage();

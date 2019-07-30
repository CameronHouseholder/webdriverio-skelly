import Page from './page';

class HomePage extends Page {
    /**
     * elements
     */
    get lblHeader() { return $('.txt h1'); }

    get lblEditorCollections() { return $$('.editor_collections'); }

    /**
     * Navigates to the home page
     */
    open() {
        super.open('');
    }

    /**
     * Wait for the header label to display and return the text
     * @return {string} header label text
     */
    getHeader() {
        return this.getElemText(this.lblHeader);
    }
}

export default new HomePage();

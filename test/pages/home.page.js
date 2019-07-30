import Page from './page';

class HomePage extends Page {
    /**
     * elements
     */
    get lblHeader() { return $('.txt h1'); }

    get lblEditorCollections() { return $$('.editor_collections'); }

    /**
     * Wait for the header label to display and return the text
     * @return {string} header label text
     */
    getHeader() {
        return this.getElemText(this.lblHeader);
    }

    open() {
        super.open('');
    }
}

export default new HomePage();

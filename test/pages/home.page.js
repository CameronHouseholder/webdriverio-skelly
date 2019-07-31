import Page from './page';

class HomePage extends Page {
    /**
     * page variables
     */
    get pageTitle() { return 'Welcome'; }

    get pageHeader() { return 'We\'re passionate about tea.'; }

    get editorCollections() { return ['Herbal Tea', 'Loose Tea', 'Flavored Tea']; }

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

    getEditorCollections() {
        const texts = [];
        this.lblEditorCollections.forEach(elem => texts.push(this.getElemText(elem)));
        return texts;
    }
}

export default new HomePage();

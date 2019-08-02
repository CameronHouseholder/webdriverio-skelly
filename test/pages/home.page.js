import Page from './page';

class HomePage extends Page {
    /**
     * page variables
     */
    get pageUrl() { return 'welcome.html'; }

    get pageTitle() { return 'Welcome'; }

    get pageHeader() { return 'We\'re passionate about tea.'; }

    get editorCollections() { return ['Herbal Tea', 'Loose Tea', 'Flavored Tea']; }

    /**
     * elements
     */
    get lblPageHeader() { return $('.txt h1'); }

    get lblEditorCollections() { return $$('.editor_collections'); }

    /**
     * Navigates to the home page
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

    getEditorCollections() {
        const texts = [];
        this.lblEditorCollections.forEach(elem => texts.push(this.getElemText(elem)));
        return texts;
    }
}

export default new HomePage();

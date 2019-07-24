import Page from './page';

class HomePage extends Page {
    /**
     * elements
     */
    get lblHeader() { return $('.txt h1'); }

    get lblEditorCollections() { return $$('.editor_collections'); }

    open() {
        super.open('');
    }
}

export default new HomePage();

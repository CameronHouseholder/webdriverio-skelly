class HomeData {
    constructor() {
        this.teas = ['Herbal Tea', 'Loose Tea', 'Flavored Tea'];
    }

    get editorCollectionsTeas() { return this.teas; }

    set editorCollectionsTeas(tea) { this.teas.push(tea); }
}

export default new HomeData();

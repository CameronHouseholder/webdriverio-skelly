import Page from './page';

class CheckOutPage extends Page {
    constructor() {
        super();
        this._cardTypes = [
            {
                text: '',
                value: '',
            },
            {
                text: 'Visa',
                value: '',
            },
            {
                text: 'Mastercard',
                value: '',
            },
            {
                text: 'American Express',
                value: '',
            },
            {
                text: 'Diners Club',
                value: '',
            },
        ];
    }

    /**
     * page variables
     */
    get pageUrl() { return 'check-out.html'; }

    get pageTitle() { return 'Check Out'; }

    get pageHeader() { return 'Pay with Credit Card or Log In'; }

    get cardTypes() { return this._cardTypes; }

    /**
     * elements
     */
    get lblPageHeader() { return $('span[style="color:#0000FF;"] strong'); }

    get txtEmail() { return $('#email'); }

    get txtName() { return $('#name'); }

    get txtAddress() { return $('#address'); }

    get sddCardType() { return $('card_type'); }

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

    /**
     * Wait for the email text box to display and enter the email
     * @param {string} email email to enter in the email text box
     */
    setEmail(email) {
        this.setElemText(this.txtEmail, email);
    }

    /**
     * Wait for the name text box to display and enter the name
     * @param {string} name name to enter in the name text box
     */
    setName(name) {
        this.setElemText(this.txtName, name);
    }

    /**
     * Wait for the address text box to display and enter the address
     * @param {string} address address to enter in the address text box
     */
    setAddress(address) {
        this.setElemText(this.txtAddress, address);
    }

    /**
     * Enter the customer info into the email, name, and address text boxes
     * @param {object} info customer info containing the email, name, and address of a customer
     * @param {string} info.email email to enter in the email text box
     * @param {string} info.name name to enter in the name text box
     * @param {string} info.address address to enter in the address text box
     */
    setCustomerInfo(info) {
        this.setEmail(info.email);
        this.setName(info.name);
        this.setAddress(info.address);
    }

    selectCardType(option) {
        this.selectOptionByVisibleText(this.sddCardType, option);
    }
}

export default new CheckOutPage();

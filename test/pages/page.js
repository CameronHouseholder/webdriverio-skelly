import allureReporter from '@wdio/allure-reporter';

export default class Page {
    constructor() {
        this.defaultTimeout = 5000;
    }

    open(path) {
        browser.url(path);
    }

    /**
     * Get and return the current page title
     * @returns {string} the current page title
     */
    getTitle() {
        const pageTitle = browser.getTitle();
        const reporterMsg = `page title (Get Title): ${pageTitle}`;
        allureReporter.addStep(reporterMsg, undefined, 'passed');
        return pageTitle;
    }

    /**
     * Waits for the element to be displayed and then clicks the element
     * @param {object} elem the element to perform the action on
     */
    clickElem(elem) {
        try {
            elem.waitForDisplayed(this.defaultTimeout);
            elem.click();
            const reporterMsg = `${elem.selector} (Click)`;
            allureReporter.addStep(reporterMsg, undefined, 'passed');
        } catch (ex) {
            allureReporter.addStep(ex, undefined, 'failed');
            throw new Error(ex);
        }
    }

    /**
     * Waits for the element to be displayed and then returns the element text
     * @param {object} elem the element to perform the action on
     * @returns {string} the element text
     */
    getElemText(elem) {
        let elemText = '';
        try {
            elem.waitForDisplayed(this.defaultTimeout);
            elemText = elem.getText();
            const reporterMsg = `${elem.selector} (Get Text): ${elemText}`;
            allureReporter.addStep(reporterMsg, undefined, 'passed');
        } catch (ex) {
            allureReporter.addStep(ex, undefined, 'failed');
            throw new Error(ex);
        }
        return elemText;
    }

    /**
     * Determine if the element is displayed in the DOM and return true or false
     * @param {object} elem the element to perform the action on
     * @returns {boolean} true if the element is displayed in the DOM
     */
    elemIsDisplayed(elem) {
        let isDisplayed = false;
        let reporterMsg = '';
        try {
            isDisplayed = elem.isDisplayed();
        } catch (ex) {
            // element is not present in the DOM so isDisplayed should remain false
        }
        reporterMsg = `${elem.selector} (Is Displayed): ${isDisplayed}`;
        allureReporter.addStep(reporterMsg, undefined, 'passed');
        return isDisplayed;
    }
}

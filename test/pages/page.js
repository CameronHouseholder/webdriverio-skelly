import allureReporter from '@wdio/allure-reporter';

export default class Page {
    constructor() {
        this.defaultTimeout = 5000;
    }

    open(path) {
        browser.url(path);
    }

    /**
     * Waits for the element to be displayed and then returns the element text
     * @param {object} elem
     */
    getElemText(elem) {
        let reporterMsg = '';
        let elemText = '';
        try {
            elem.waitForDisplayed(this.defaultTimeout);
            elemText = elem.getText();
            reporterMsg = `${elem.selector} (Get Text): ${elemText}`;
            allureReporter.addStep(reporterMsg, undefined, 'passed');
        } catch (ex) {
            reporterMsg = `${elem.selector} did not display after ${this.defaultTimeout} ms`;
            allureReporter.addStep(reporterMsg, undefined, 'failed');
            throw new Error(reporterMsg);
        }
        return elemText;
    }
}

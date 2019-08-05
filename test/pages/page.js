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
     * Get and return the current page url and page title
     * @returns {object} result - the result containing the current page url and title
     * @returns {string} result.url - the current page url
     * @returns {string} result.title - the current page title
     */
    getUrlAndTitle() {
        const result = { url: '', title: '' };
        let reporterMsg = '';
        // get url
        result.url = browser.getUrl();
        reporterMsg = `page url= (Get Url): ${result.url}`;
        allureReporter.addStep(reporterMsg, undefined, 'passed');
        // get title
        result.title = browser.getTitle();
        reporterMsg = `page title (Get Title): ${result.title}`;
        allureReporter.addStep(reporterMsg, undefined, 'passed');
        return result;
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
     * Waits for the element to be displayed and then sets the text of the element
     * @param {object} elem the element to perform the action on
     * @param {string} text the text to set in the element
     */
    setElemText(elem, text) {
        try {
            elem.waitForDisplayed(this.defaultTimeout);
            elem.sendKeys(text);
            const reporterMsg = `${elem.selector} (Send Keys): ${text}`;
            allureReporter.addStep(reporterMsg, undefined, 'passed');
        } catch (ex) {
            allureReporter.addStep(ex, undefined, 'failed');
            throw new Error(ex);
        }
    }

    // TODO: Add JS doc comments
    selectOptionByValue(elem, option) {
        try {
            elem.waitForDisplayed(this.defaultTimeout);
            elem.selectByAttribute('value', option.value);
            const reporterMsg = `${elem.selector} (Select Option By Value): ${option.value}`;
            allureReporter.addStep(reporterMsg, undefined, 'passed');
        } catch (ex) {
            allureReporter.addStep(ex, undefined, 'failed');
            throw new Error(ex);
        }
    }

    // TODO: Add JS doc comments
    selectOptionByVisibleText(elem, option) {
        try {
            elem.waitForDisplayed(this.defaultTimeout);
            elem.selectByVisibleText(option.text);
            const reporterMsg = `${elem.selector} (Select Option By Visible Text): ${option.text}`;
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

    /**
     * Determine if the element is enabled and return true or false
     * @param {object} elem the element to perform the action on
     * @returns {boolean} true if the element is enabled
     */
    elemIsEnabled(elem) {
        let isEnabled = false;
        try {
            elem.waitForDisplayed(this.defaultTimeout);
            isEnabled = elem.isEnabled();
            const reporterMsg = `${elem.selector} (Is Enabled): ${isEnabled}`;
            allureReporter.addStep(reporterMsg, undefined, 'passed');
        } catch (ex) {
            allureReporter.addStep(ex, undefined, 'failed');
            throw new Error(ex);
        }
        return isEnabled;
    }

    /**
     * Determine if the element is selected and return true or false
     * @param {object} elem the element to perform the action on
     * @returns {boolean} true if the element is selected
     */
    elemIsSelected(elem) {
        let isEnabled = false;
        try {
            elem.waitForDisplayed(this.defaultTimeout);
            isEnabled = elem.isSelected();
            const reporterMsg = `${elem.selector} (Is Selected): ${isEnabled}`;
            allureReporter.addStep(reporterMsg, undefined, 'passed');
        } catch (ex) {
            allureReporter.addStep(ex, undefined, 'failed');
            throw new Error(ex);
        }
        return isEnabled;
    }
}

const AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/*/*.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30 * 1000
    },

    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(async () => {
            let screen = await browser.takeScreenshot();
            await allure.createAttachment("Screenshot", () => Buffer.from(screen, "base64"), `image/png`)();
            await browser.restart();
            browser.waitForAngularEnabled(false);
        });
    }
};
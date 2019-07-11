const AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/login/*.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30 * 1000
    },

    capabilities: {
        shardTestFiles: true,
        browserName: 'chrome',
        chromeOptions: {
            args: ["--window-size=1280,780"]
        }
    },

    maxInstances: 1,
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(async () => {
            let screen = await browser.takeScreenshot();
            await allure.createAttachment("Screenshot", () => Buffer.from(screen, "base64"), `image/png`)();
        });
    }
};
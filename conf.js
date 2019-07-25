const AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/main/*.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 50 * 1000
    },

    capabilities: {
        shardTestFiles: true,
        browserName: 'chrome',
        chromeOptions: {
            args: ["--window-size=1280,880"]
        }
    },

    maxInstances: 1,
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: async () => {
        await browser.manage().setTimeouts({ implicit: 5000 });
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
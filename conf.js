exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],

    jasmineNodeOpts: {
    defaultTimeoutInterval: 30 * 1000
    },

    SELENIUM_PROMISE_MANAGER: false,
    
    onPrepare: async () => {
    browser.waitForAngularEnabled(false);
}
}



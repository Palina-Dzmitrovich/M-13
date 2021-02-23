const { browser } = require("protractor");

exports.config = {
    // The address of a running selenium server.
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    directConnect: true,

    // onPrepare: () => {
    //     browser.waitForAngularEnabled(false);
    // },

    restartBrowserBetweenTests: true,
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs : [
        "../specs/*.spec.js"
    ],

    SELENIUM_PROMISE_MANAGER: false,


    mochaOpts: {
      reporter: "spec",
      timeout: "600000"
    }

    };

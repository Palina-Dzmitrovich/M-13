exports.config = {

    seleniumAddress: 'http://localhost:4723/wd/hub',

    capabilities: {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Test_Device'
    },

    // onPrepare: () => {
    //     browser.waitForAngularEnabled(false);
    // },

    specs : [
        "../specs/*.spec.js"
    ],

    mochaOpts: {
        reporter: "spec",
        timeout: "600000"
      }
      
}
// An example configuration file.
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const yargs = require('yargs').argv;

exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
  },

  framework: 'jasmine',

  specs: ['../specs/*.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 100000
  },

  onPrepare:  function() {
     browser.waitForAngularEnabled(false);
     browser.manage().window().maximize();
     jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: '../M10_YARGS/test/report',
        cleanDestination: false,
        fileName: 'testReport'
      })
    );
  }
};

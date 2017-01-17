// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:3010
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#hero-input')
      //.assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('.hero-item', 10)
      .end();
  },
};

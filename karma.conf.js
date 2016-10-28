var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], //,'Firefox'
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      //'node_modules/foundation-sites/dist/foundation.min.js',
      // only load the js I need from foundation
      'node_modules/foundation-sites/js/foundation.core.js',
      'node_modules/foundation-sites/js/foundation.util.mediaQuery.js',
      'node_modules/foundation-sites/js/foundation.tabs.js',
      'node_modules/foundation-sites/js/foundation.util.keyboard.js',
      'app/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      captureConsole: true,
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};

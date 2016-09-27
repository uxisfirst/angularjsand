// Karma configuration
// Generated on Tue Sep 27 2016 10:24:38 GMT+0900 (JST)

const path = require('path');

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-sourcemap-loader',
    ],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'test/**/*.ts', watched: false },
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.spec.ts': ['webpack', 'sourcemap'],
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader',
            exclude: [
              /node_modules/,
            ],
          },
        ]
      },
      devtool: 'source-map',
      resolve: {
        extensions: ['.ts'],
        modules: ['node_modules', path.join(__dirname, 'test')]
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

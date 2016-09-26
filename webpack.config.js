"use strict";

const webpack = require('webpack');

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');

const path = require('path');
const env = process.env.NODE_ENV;

let config = {
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [
          /node_modules/,
        ],
      },
      { test: /\.html$/, loader: 'html-loader' },
    ]
  },
  entry: {
    app: path.join(__dirname, 'src/app/app.ts'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules', path.join(__dirname, 'src')]
  },
};

if (env === 'production') {
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    test: /\.css$/, // optionally pass test, include and exclude, default affects all loaders
    minimize: true,
    debug: false,
    options: {
      // pass stuff to the loader
    }
  }));
} else {
  config.devtool = 'source-map';
}

module.exports = config;

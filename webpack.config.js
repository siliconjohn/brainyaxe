var webpack = require('webpack');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');
var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');

// if -p (production) build  mimimized files: webpack -p
var production = process.argv.indexOf("-p") != -1 ? true : false

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    //'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false,
        },
        minimize: true
    }),
    new webpack.optimize.DedupePlugin(),
    new WebpackErrorNotificationPlugin(),
    new WebpackNotifierPlugin({title: 'Webpack', excludeWarnings: true}),
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/components/fretboard',
      './app/components/customtunings',
      './app/api'
    ],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions:[ '','.js','.jsx']
  },
  module:{
    loaders: [
      {
        loader: 'babel-loader',
        query:{
          presets:['react','es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths:[
      path.resolve(__dirname, './node_modules/foundation-sites/scss'),
    ]
  },
  devtool: production ? null : 'cheap-module-eval-source-map'
};

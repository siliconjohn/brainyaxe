var webpack = require('webpack');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');
var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');

var exportValues = {}

// if -p (production)
const production = process.argv.indexOf("-p") != -1 ? true : false

// these files are used for both dev and production
const entryFiles = [
  'script!jquery/dist/jquery.min.js',
  'script!foundation-sites/dist/foundation.min.js',
  //'script!foundation-sites/js/foundation.core.js',

  './app/app.jsx'
  ]

// these files are used for both dev and production
const modulesDirectories = [
    'node_modules',
    './app/redux',
    './app/components',
    './app/selectors',
    './app/components/fretboard',
    './app/components/menus',
    './app/api'
  ]

if( production ) {

  /////////////////////
  // production
  /////////////////////

  exportValues = {
    entry: entryFiles,
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
      sourceMapFilename: '[file].map'
    },
    resolve: {
      root: __dirname,
      modulesDirectories: modulesDirectories,
      alias: {
        applicationStyles: 'app/styles/app.scss',
        utils: 'app/utils.jsx'
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
    devtool: 'source-map'
  }
} else {

  ////////////////////
  // dev
  ////////////////////

  exportValues = {
    entry: entryFiles,
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
      }),
      new webpack.optimize.DedupePlugin(),
      new WebpackErrorNotificationPlugin(),
      new WebpackNotifierPlugin({title: 'Webpack', excludeWarnings: true}),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js',
      sourceMapFilename: '[file].map'
    },
    resolve: {
      root: __dirname,
      modulesDirectories: modulesDirectories,
      alias: {
        applicationStyles: 'app/styles/app.scss',
        utils: 'app/utils.jsx'
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
    devtool: 'cheap-source-map'
  }
}

module.exports = exportValues

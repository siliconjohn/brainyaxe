var webpack = require('webpack');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');
var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');

// if -p (production) build  mimimized files: webpack -p
var production = process.argv.indexOf("-p") != -1 ? true : false
var definePlugin = null

if ( production ){
  definePlugin = new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  })
} else {
  // this is a blank DefinePlugin that does nothing
  definePlugin = new webpack.DefinePlugin({
    '_emptybs':{
      '_emptybs': JSON.stringify('_emptybs')
    }
  })
}

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
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
    definePlugin
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/redux',
      './app/components',
      './app/components/fretboard',
      './app/components/menus',
      './app/components/presentational',
      './app/api'
    ],
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
  devtool: production ? 'source-map' : 'cheap-module-eval-source-map'
};

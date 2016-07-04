var webpack = require('webpack');

// if -p (production) build  mimimized files: webpack -p
var production = process.argv.indexOf("-p") != -1 ? true : false

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
    new webpack.optimize.DedupePlugin()
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
  devtool: production ? null : 'cheap-module-eval-source-map'
};

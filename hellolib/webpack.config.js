const webpack = require('webpack');
const path = require('path');

module.exports = {
  // devtool: 'source-map',
  // entry: './src/index.js',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  // module: {
  //   loaders: [
  //     {
  //       text: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: "babel-loader"
  //     }
  //   ]
  // },
  module: {
    rules: [{
      test: /\.js$/, // include .js files
      enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: "babel-loader",
        // query: {
        //   presets: ['es2015', 'react']
        // },
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
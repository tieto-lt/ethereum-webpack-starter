var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  output: {
    path: './build/',
    filename: 'app.bundle.js'
  },
  web3Loader: {
    constructorParams: {
      SampleContract: []
    }
  },
  module: {
    loaders: [
      { test: /\.sol$/, loaders: ['web3', 'solc'] },
      { test: /\.css$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.scss$/, loader:  ExtractTextPlugin.extract("style","css!sass") },
      { test: /\.html$/, loaders: ['html'] },
      { test: /\.json$/, loader: "json-loader"}
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './app/index.html', to: "index.html" },
      { from: './images', to: "images" },
    ]),
    new ExtractTextPlugin("app.bundle.css")
  ],
  web3Loader: {
    // This is default
    provider: 'http://localhost:8545'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules', 'contracts', '.'
    ]
  }
};

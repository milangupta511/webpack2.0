const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
  entry: './src/index.js',
  output: {
    filename: 'output.js',
    path: path.resolve(__dirname, './public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use:ExtractTextWebpackPlugin.extract({
          use:['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins:[ new ExtractTextWebpackPlugin('styles.css')],
  devServer: {
    contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from
    historyApiFallback: true, //fallback to /index.html from SPA,
    inline:true,
    open:true
  },
  devtool: 'eval-source-map'
}

module.exports = config;
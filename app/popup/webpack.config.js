const path = require('path');

module.exports = {
  entry: [
    './app/popup/src/scripts/index.js'
  ],

  output: {
    filename: 'popup.js',
    path: path.join(__dirname, '../../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.css$/,
        include: /(node_modules)/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'base64-font-loader'
      }, {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'base64-image-loader'
        ]
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      }, {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
        },
      }],
  }
};

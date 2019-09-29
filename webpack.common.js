const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js', './src/index.css'
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({title: 'case challenge production', template: 'template/index.ejs'})
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};

require('dotenv').config();
const path = require("path");
const FontConfigWebpackPlugin = require("font-config-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: process.env.ENVIRONMENT,
  entry: {
    'main': './src/js/index.js',
  },
  plugins: [
    new FontConfigWebpackPlugin(),
    new MiniCssExtractPlugin({filename: "[name].css", chunkFilename: "[id].css"}),
  ],
  resolve: {
    alias: {
      Fonts: path.resolve(__dirname, './assets/fonts/'),
      Styles: path.resolve(__dirname, './src/scss/')
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/built'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './assets/built'
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
};
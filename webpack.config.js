const path = require('path');
const FontConfigWebpackPlugin = require('font-config-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  plugins: [new FontConfigWebpackPlugin()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
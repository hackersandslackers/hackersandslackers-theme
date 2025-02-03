const path = require("path");
const DotEnv = require(`dotenv-webpack`);
const FontConfigWebpackPlugin = require("font-config-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require(`terser-webpack-plugin`);

module.exports = {
  entry: {
    main: path.resolve(__dirname, `./src/js/index.js`),
    post: path.resolve(__dirname, `./src/js/post.js`),
    page: path.resolve(__dirname, `./src/js/page.js`),
    author: path.resolve(__dirname, `./src/js/author.js`),
    nav: path.resolve(__dirname, `./src/js/navigation.js`),
  },
  plugins: [
    new DotEnv({ path: "./.env" }),
    new FontConfigWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  mode: process.env.ENVIRONMENT,
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, "./src/scss/"),
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./assets/built/js/"),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require.resolve("sass"),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./assets/built/css/",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

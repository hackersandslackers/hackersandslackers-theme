module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ["import"],
  extends: ["plugin:ghost/[config]"],
  entry: {
    global: path.resolve(__dirname, "./src/js/index.js"),
  },
  resolve: {
    alias: {
      Fonts: path.resolve(__dirname, "./assets/fonts/"),
      Styles: path.resolve(__dirname, "./src/scss/"),
    },
  },
};

module.exports = [
  {
    files: ["src/js/*.js"],
    languageOptions: {
      parser: "@babel/eslint-parser",
      parserOptions: {
        ecmaVersion: "latest",
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          // your babel options
          presets: ["@babel/preset-env"],
        },
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      ghost: "ghost",
      extends: ["plugin:ghost/node"],
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          functions: "ignore",
        },
      ],
    },
  },
];

import babelParser from "@babel/eslint-parser";
import ghostPlugin from "eslint-plugin-ghost";

export default [
  {
    files: ["src/js/*.js"],
    ignores: ["assets/**/*.js"],
    languageOptions: {
      parser: babelParser,
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
      ghost: ghostPlugin,
      extends: ["plugin:ghost/node"],
    },
    rules: {
      indent: ["warn", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "ignore",
        },
      ],
    },
  },
];

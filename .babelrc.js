module.exports = {
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./src"],
          "alias": {
            "Fonts": "./assets/fonts/",
            "Styles": "./src/scss/"
          }
        }
      ]
    ],
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "browsers": [">1%", "not dead"]
          }
        }
      ]
    ]
  }
module.exports = {
  parser: "babel-eslint",
  extends: [
    "mindhive"
  ],
  env: {
    meteor: true
  },
  rules: {
    "new-cap": [
      "error",
      {
        "capIsNewExceptionPattern": "^Match\\.."
      }
    ],
    "import/no-absolute-path": "off"
  },
  settings: {
    "import/resolver": {
      "meteor": {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    }
  }
}

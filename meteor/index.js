module.exports = {
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
    "import/no-absolute-path": "off",  // Because of root imports
    /* REVISIT: once these issues are fixed:
     https://github.com/benmosher/eslint-plugin-import/issues/479
     https://github.com/clayne11/eslint-import-resolver-meteor/issues/11 */
    "import/no-extraneous-dependencies": "off"
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

module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb-base"
  ],
  env: {
    mocha: true
  },
  rules: {
    "max-len": [
      "warn",
      {
        code: 120,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    "padded-blocks": "off",
    "semi": [
      "error",
      "never"
    ],
    "space-unary-ops": [
      "error",
      {
        overrides: {
          "!": true
        }
      }
    ],
    "quote-props": "off",            // Sometimes good for consistency
    "comma-dangle": [                // Because we sometimes like single params on multi lines with no comma dangle
      "error",
      "only-multiline"
    ],
    "no-confusing-arrow": "off",
    "no-unused-expressions": "off",  // Used in Chai a lot
    "no-underscore-dangle": "off",   // We use to indicate private
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "[Oo]mit",
        argsIgnorePattern: "[Ii]gnore"
      }
    ],
    "no-param-reassign": [
      "error",
      {
        props: false                // can assign the properties of params
      }
    ],
    "no-trailing-spaces": "off",    // because IDEA often leaves these around until a save is done
    "class-methods-use-this": "off",   // because we don't want to change to static methods based of implementation detail
    "import/named": "error",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*",
          "**/*.spec.*",
          "**/mocha.js",
          "**/webpack.config.js",
          "**/*wallaby.js"
        ]
      }
    ],
    "import/prefer-default-export": "off",
    "import/first": [
      "error",
      {
        "absolute-first": false   // because root imports are treated as absolute
      }
    ]
  }
}

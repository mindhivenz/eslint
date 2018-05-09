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
    "no-multi-spaces": [
      "error",
      { ignoreEOLComments: true }    // Just like this one
    ],
    "object-curly-newline": "off",   // Can better for pretty formatting in other ways
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
        varsIgnorePattern: "([Ii]gnore|[Oo]mit)",
        argsIgnorePattern: "([Ii]gnore|[Oo]mit)"
      }
    ],
    "no-param-reassign": [
      "error",
      { props: false }                // can assign the properties of params
    ],
    "function-paren-newline": "off",
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: true,
          object: true
        },
        AssignmentExpression: {
          array: false,               // because without semicolons it to causes too many problems
          object: false               // otherwise requires ugly brackets
        },
      },
      { enforceForRenamedProperties: false }
    ],
    "no-trailing-spaces": "off",      // because IDEA often leaves these around until a save is done
    "class-methods-use-this": "off",  // because we don't want to change to static methods based of implementation detail
    "no-return-await": "off",         // we prefer to be obvious where the code is awaiting
    "no-await-in-loop": "off",        // we use this fairly often when the body has to run sequentially
    "no-constant-condition": [
      "error",
      { checkLoops: false }           // Like: while (true) { ... if (x) break/return }
    ],
    "import/named": "error",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*",
          "**/*specs/**/*",
          "**/*.spec.*",
          "**/mocha.js",
          "**/deploy/**/*",
          "**/*wallaby.js",
          "**/webpack.config.*",
          "**/gulpfile.*"
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

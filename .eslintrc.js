const prettierrc = require('./prettierrc')

module.exports = {
  "extends": ["standard-react", "prettier-standard"],
  "env": {
    "jest": true
  },
  "rules": {
    "generator-star-spacing": ["warn"],
    "no-console": [
      "error",
      {
        "allow": ["warn", "error", "info", "group", "groupEnd"]
      }
    ],
    "no-throw-literal": 0,
    "no-extend-native": 0,
    "complexity": [
      "error",
      {
        "max": 10
      }
    ],
    "func-names": 0,
    "no-unused-vars": [
      2,
      {
        "ignoreRestSiblings": true
      }
    ],
    "react/jsx-no-bind": 0,
    "standard/no-callback-literal": 0,
    "prettier/prettier": [
      "error",
      prettierrc
    ]
  },
  "globals": {
    "cy": true,
    "Cypress": true
  }
}

module.exports = {
  extends: [
    "airbnb",
    "mindhive"
  ],
  rules: {
    "react/prop-types": "off",
    "react/jsx-wrap-multilines": ["error", {
      declaration: true,
      assignment: true,
      return: true,
      arrow: false
    }]
  }
}

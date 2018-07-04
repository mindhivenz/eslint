module.exports = {
  extends: [
    "airbnb",
    "mindhive"
  ],
  rules: {
    "react/prop-types": "off",

    // Disable formatting rules because we use Prettier
    "react/jsx-wrap-multilines": "off",
    "react/jsx-indent": "off"
  }
}

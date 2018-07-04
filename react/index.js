module.exports = {
  extends: [
    "airbnb",
    "mindhive"
  ],
  rules: {
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",  // Since crate-react-app doesn't compile .jsx with babel

    // Disable formatting rules because we use Prettier
    "react/jsx-wrap-multilines": "off",
    "react/jsx-indent": "off"
  }
}

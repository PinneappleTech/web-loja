module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
    "no-unused-expressions": "off",
  },
};

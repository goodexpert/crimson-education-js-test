module.exports = {
  extends: ["plugin:prettier/recommended", "recommended/node"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
  },
  env: {
    jest: true,
  },
  rules: {
    "import/no-commonjs": "off",
  },
};

module.exports = {
  extends: ["turbo", "plugin:react/recommended", "plugin:prettier/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};

module.exports = {
  settings: {
    react: { version: "detect" },
  },
  root: true,
  env: { browser: true, es6: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["react", "react-refresh"],
  rules: {
    noExplicitAny: false,
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-values": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};

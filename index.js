/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",

    "eslint:recommended",

    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-airbnb",
    "@vue/eslint-config-prettier",

    "plugin:prettier/recommended",
  ],

  overrides: [
    // Custom overrides for Cypress.
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}", "**/tests/e2e/**/*.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],

  settings: {
    // Register `@/` import alias to `src/`.
    "import/resolver": {
      alias: {
        map: [['@', './src/']],
        extensions: ['.js', '.ts', '.vue'],
      },
    },
  },

  rules: {
    "no-unused-vars": "warn",
  },
};

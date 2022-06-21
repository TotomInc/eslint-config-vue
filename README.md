# `@totominc/eslint-config-vue`

> An ESLint config for my personal projects in Vue 3 + TypeScript.

- Inherit defaults recommended by Vue team, when creating a project with `npm init vue@3`.
- TypeScript and Vue 3 support.
- Follows AirBnB JavaScript Style Guide.
- Includes Prettier with auto-fix for formatting.
- Automatic TailwindCSS class sorting with `prettier-plugin-tailwindcss`.
- Cypress plugin enabled only on Cypress files.
- Custom alias import resolver (`@/`).
- Tweak as few rules as possible.

## Usage

### Install

```bash
npm install --save-dev @totominc/eslint-config-vue @rushstack/eslint-patch eslint
```

### Configure `.eslintrc.js`

```js
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["@totominc/eslint-config-vue"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    // Optional, but recommended if you have multiple ts-configs.
    project: ["./tsconfig.json", "./vite.tsconfig.json"],
  },
};
```

### Add script in `package.json`

```json
{
  "scripts": {
    "lint": "eslint . --ignore-path .gitignore",
    "lint:fix": "eslint . --fix --ignore-path .gitignore"
  }
}
```

### VS Code config for auto-fix

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

MIT, see `LICENSE` file.

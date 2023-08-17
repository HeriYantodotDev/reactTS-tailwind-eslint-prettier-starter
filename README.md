Table Of Content:

# ReactTSTailwindWithLintingPrettier-starter

This is a starter for a vite project with this set up:

- React
- TypeScript
- TailwindCSS
- ESLint & the recommendation setting
- Prettier

# Vite

Here's the full guide : [vite-guide](https://vitejs.dev/guide/)

- `npm create vite@latest`
- fill in the `Project name`
- Select a framework: 'React'
- Select a variant: It's either `TypeScript` or `TypeScript + SWC`
- Use command from to the new folder and then `npm install`

# Eslint & Prettier

## .vscode

First off all adding this into the folder `.vscode` - `settings.json`:

```json
{
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

Uncomment `.vscode` from gitignore to ensure that you still have this setup for TypeScript React when you removed this repo from your local.

## Installing dependencies

Let's start with this dependencies first:

```
npm install -D prettier prettier-plugin-tailwindcss tailwindcss @tailwindcss/forms @tailwindcss/typography eslint-plugin-prettier eslint-config-prettier @types/eslint-config-prettier
```

## `.eslintrc.cjs`

Now let's add configuration for it:

```cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'warn',
    'react/react-in-jsx-scope': 0,
  },
};
```

## `.prettierrc.cjs`

Now let's add configuration for prettier:

```cjs
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  // jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',
};
```

Now let's test it add element like this :

```
<div className="mb-10 mt-10 mx-7 ">
```

When you save it, it changes to be like this:

```
 <div className="mx-7 mb-10 mt-10 ">
```

Restart the VS Code.

## Tailwind Config

Here's the full guide: [tailwind vite guide](https://tailwindcss.com/docs/guides/vite)

We already install tailwindcss now let's install this :

```
npm install -D postcss autoprefixer
```

Then run this command :

```
npx tailwindcss init -p
```

This will generate two configuration file:

- `tailwind.config.js`
- `postcss.config.js`

Add the path to `tailwind.config.js` :

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

Done, we can use the tailwind now.

## AirBNB

Here's the fun part, we can linting recommendation from AirBNB:

```
npm install -D eslint-config-airbnb eslint-config-airbnb-typescript
```

Now let's add the configuration in the `.eslintrc.cjs`:

```
extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:react-hooks/recommended',
  'plugin:prettier/recommended',
  'airbnb',
  'airbnb-typescript',
  'airbnb/hooks',
],
```

## vite.config.ts

Now we have to add this into the `vite.config.ts`:

```
/* eslint-disable import/no-extraneous-dependencies */
```

```
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

```

This is to ensure, EsLint is not throwing error about vite should not be in the development dependencies.

# Npm Script

Vite already provides the script for lint:

```
"lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
```

We can use it. Now let's add for `typecheck`:

```
"typecheck": "tsc --noEmit",
```

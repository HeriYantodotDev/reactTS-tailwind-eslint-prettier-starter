# ReactTSTailwindWithLintingPrettier-starter

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [ReactTSTailwindWithLintingPrettier-starter](#reacttstailwindwithlintingprettier-starter)
- [Vite](#vite)
- [Eslint & Prettier](#eslint-prettier)
  - [.vscode](#vscode)
  - [Installing dependencies](#installing-dependencies)
  - [`.eslintrc.cjs`](#eslintrccjs)
  - [`.prettierrc.cjs`](#prettierrccjs)
  - [Tailwind Config](#tailwind-config)
  - [AirBNB](#airbnb)
  - [vite.config.ts](#viteconfigts)
- [Npm Script](#npm-script)
- [Testing Environment](#testing-environment)
  - [Installing dependency](#installing-dependency)
  - [Excluding test files for production build](#excluding-test-files-for-production-build)
  - [Adding sample test](#adding-sample-test)
  - [Jest Configuration](#jest-configuration)
  - [Test Case](#test-case)
  - [Additional Dependencies](#additional-dependencies)

<!-- TOC end -->

<!-- TOC --><a name="reacttstailwindwithlintingprettier-starter"></a>

This is a starter for a vite project with this set up:

- React
- TypeScript
- TailwindCSS
- ESLint & the recommendation setting
- Prettier
- Jest

Tips for future me:

- Do not copy paste package.json. Install it directly to ensure that we're using the latest version of the package
- Only copy for the configuration file.
- Read Documentation particularly for Jest Part!

<!-- TOC --><a name="vite"></a>

# Vite

Here's the full guide : [vite-guide](https://vitejs.dev/guide/)

- `npm create vite@latest`
- fill in the `Project name`
- Select a framework: 'React'
- Select a variant: It's either `TypeScript` or `TypeScript + SWC`
- Use command from to the new folder and then `npm install`

<!-- TOC --><a name="eslint-prettier"></a>

# Eslint & Prettier

<!-- TOC --><a name="vscode"></a>

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

<!-- TOC --><a name="installing-dependencies"></a>

## Installing dependencies

Let's start with this dependencies first:

```
npm install -D prettier prettier-plugin-tailwindcss tailwindcss @tailwindcss/forms @tailwindcss/typography eslint-plugin-prettier eslint-config-prettier @types/eslint-config-prettier
```

<!-- TOC --><a name="eslintrccjs"></a>

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

<!-- TOC --><a name="prettierrccjs"></a>

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

<!-- TOC --><a name="tailwind-config"></a>

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

Got to './src/index.css' and add this :

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Restart the VSCode. Done, we can use the tailwind now.

<!-- TOC --><a name="airbnb"></a>

## AirBNB

Here's the fun part, we can use the linting recommendation from AirBNB:

```
npm install -D eslint-config-airbnb eslint-config-airbnb-typescript
```

We've already added those in the `.eslintrc.cjs`. However please ensure once again that you already use it like this:

```
extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
],
```

Please ensure that `'plugin:prettier/recommended',` would be at the bottom, so there will be no unnecessary conflict with esLint

<!-- TOC --><a name="viteconfigts"></a>

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

Please also add these to the `tsconfig.json` configuration:

```
  "include": ["vite.config.ts",
  ".eslintrc.cjs",
  "src",
  "tailwind.config.js",
  "postcss.config.js",
  "jest.config.ts"
  ],
```

Restart your VSCode, and now when you open `App.tsx` you'll see tons of linting errors. Don't panic! That means our set up works.

## Fixing Error

Go to the error one by one, and you modify your code.

<!-- TOC --><a name="npm-script"></a>

# Npm Script

Vite already provides the script for lint:

```
"lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
```

We can use it. Now let's add for `typecheck`:

```
"typecheck": "tsc --noEmit",
```

<!-- TOC --><a name="testing-environment"></a>

# Testing Environment

Several References:

- [jest-vite](https://hung.dev/posts/jest-vite).
- [Hannah blog](https://dev.to/hannahadora/jest-testing-with-vite-and-react-typescript-4bap)

And here's the step by step:

<!-- TOC --><a name="installing-dependency"></a>

## Installing dependency

```
npm i --save-dev jest jest-environment-jsdom ts-jest @types/jest @testing-library/user-event @testing-library/react @testing-library/jest-dom ts-node identity-obj-proxy
```

<!-- TOC --><a name="excluding-test-files-for-production-build"></a>

## Excluding test files for production build

- Create `tsconfig.prod.json`
- Copy paste this setup
  ```json
  // tsconfig.prod.json
  {
    "extends": "./tsconfig",
    "exclude": ["./src/__tests__/**", "./src/__mocks__/**", "./src/test-utils"]
  }
  ```
- Change the package.json to use this config when build it.
  ```json
  // Package.json
  -"build": "tsc && vite build",
  +"build": "tsc -p tsconfig.prod.json && vite build",
  ```
- Adding test npm script:
  ```json
  "test": "NODE_ENV=test jest --verbose --watchAll",
  ```

<!-- TOC --><a name="adding-sample-test"></a>

## Adding sample test

Create two folders:

- `__tests__`
- `__mocks__`

`sample.test.tsx`

```tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('Layout', () => {
  test('should render the correct button text', () => {
    render(<App />);
    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });
  test('should render the image', () => {
    render(<App />);
    const image = screen.queryByRole('img');
    expect(image).toBeInTheDocument();
  });
});

```

Also change your `App.tsx` to be like this for the sake of the test:

```
import { useState } from 'react';
import img from '../public/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="mx-7 mb-10 mt-10 bg-red-500">
        <div className="ml-10 mt-10 bg-indigo-600">Test</div>
        <button type="button" onClick={() => setCount((countA) => countA + 1)}>
          count is {count}
        </button>
        <img alt="hey" src={img} />
      </div>
    </div>
  );
}

export default App;

```

<!-- TOC --><a name="jest-configuration"></a>

## Jest Configuration

Please create a file named `jest.config.ts`:

```
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__mocks__/fileMock.ts',
  },
};
```

Remember in the `tsconfig.json`, please add this :

```
  "include": ["vite.config.ts",
  ".eslintrc.cjs",
  "src",
  "tailwind.config.js",
  "postcss.config.js",
  "jest.config.ts"
  ],
```

Now let's add fileMock.ts in the `__mocks__` folder

```
export default {
  __esModule: true,
  default: 'test-file-stub',
};
```

If you encounter a TypeScript or linting error, please restart your VSCode.

Now let's run `npm run test`. If you passes the test that means your configuration is correct.

If you encounter some warning message like this:

```
If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
```

Go to the `tsconfig.json` and add this :
`"esModuleInterop": true,`

Run the test again, and ensure the warning message is gone.

<!-- TOC --><a name="test-case"></a>

## Test Case

Please read this for more detail : [testing-library react](https://testing-library.com/docs/react-testing-library/example-intro)

<!-- TOC --><a name="additional-dependencies"></a>

## Additional Dependencies

You will use these two packages a lot when you're running the test, so let's install it:

```
npm i -D msw whatwg-fetch
```

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      react.configs.flat.recommended,
      eslintConfigPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    // generated code
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "quotes": ["error", "single"],
      "no-extra-semi": "off",
      "@typescript-eslint/no-extra-semi": ["off"],
      "global-require": "off",
      "arrow-parens": "off",
      "function-paren-newline": ["error", "consistent"],
      "no-mixed-operators": "off",
      "import/first": "off",
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "no-use-before-define": "off",
      "no-use-before-define": "off",
      "react/display-name": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "warn"
    },
  },
)

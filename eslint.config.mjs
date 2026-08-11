import pluginJs from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
  },
  pluginJs.configs.recommended,
  playwright.configs['flat/recommended'],
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'off',
      'playwright/expect-expect': [
        'warn',
        { assertFunctionNames: ['assert*', 'expect'] },
      ],
    },
  },
  eslintConfigPrettier,
]);

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPrettier from 'eslint-config-prettier';
import vitest from '@vitest/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    ignores: ['dist', 'public', 'node_modules'],
  },
  {
    files: ['**/*.{ts,tsx}', '**/tests/**/*.[jt]s'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...vitest.environments.env.globals,
      },
    },
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      eslintPrettier,
    ],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      vitest,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  },
);

import globals from 'globals';
import pluginJs from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    globals: globals.node,
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': 'error',
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
  },
  {
    rules: {
      'prettier/prettier': 'error',
    },
    extends: [
      'plugin:prettier/recommended',
      'prettier',
    ],
  },
];

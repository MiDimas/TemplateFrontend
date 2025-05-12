import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import i18nextPlugin from 'eslint-plugin-i18next';
import midiPluginImport from 'eslint-plugin-midi-plugin-import';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        __IS_DEV__: 'readonly',
        __API__: 'readonly',
        __PROJECT__: 'readonly',
        // eslint-disable-next-line no-undef
        ...(process.env.NODE_ENV === 'test' ? {
          expect: 'readonly',
          test: 'readonly',
          describe: 'readonly',
          jest: 'readonly'
        } : {})
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'i18next': i18nextPlugin,
      'midi-plugin-import': midiPluginImport
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'max-len': ['error', { code: 120, ignoreComments: true }],
      'midi-plugin-import/path-check': ['error', { aliasAbsolutePath: '@' }],
      'midi-plugin-import/public-api-imports': ['error', 
        { aliasAbsolutePath: '@',
        testFilePatterns: [
            '**/*.test.ts',
            '**/*.test.tsx',
            '**/*.stories.ts',
            '**/*.stories.tsx',
            '**/StoreDecorator.tsx',
        ],
      }],
      'midi-plugin-import/layer-imports': ['error', {
        aliasAbsolutePath: '@',
        ignorePatterns: ['**/StoreProvider', '**/testing']
      }],
      '@typescript-eslint/ban-ts-comment': 'off',
      'react/display-name': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-namespace': ['error', { "allowDeclarations": true }],

    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
);

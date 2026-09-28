import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
  {
    rules: {
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-arrow-callback': 'error',
      // Prefer arrow functions across the project (components, lib, services, pages, …)
      'func-style': ['error', 'expression'],

      // TypeScript specific rules
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/comma-dangle': 'off', // Avoid conflict between ESLint and Prettier
      '@typescript-eslint/consistent-type-imports': 'error', // Prefer `import type` when possible
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
      ],
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
    },
  },
  {
    // shadcn/ui generated components — keep vendor style (CLI overwrites these)
    files: ['src/components/ui/**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      'func-style': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
    'node_modules/**',
  ]),
]);

export default eslintConfig;

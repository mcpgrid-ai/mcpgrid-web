import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslintPluginPrettierRecommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    // plugins: {
    //   import: importPlugin,
    // },
    rules: {
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['react'],
          warnOnUnassignedImports: true,
          groups: [
            'builtin',
            'external',
            'parent',
            'index',
            'sibling',
            'object',
            'type',
            'internal',
          ],
        },
      ],
    },
  },
];

export default eslintConfig;

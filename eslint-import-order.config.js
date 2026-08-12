import importPlugin from 'eslint-plugin-import';

export default {
  plugins: {
    import: importPlugin,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal', 
          'parent', 
          'sibling',
          'index',    
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: './**',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'next'],
      },
    ],
    'import/no-duplicates': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
  },
};
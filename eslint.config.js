import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        node: true,
        es6: true,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // Возможные проблемы (из eslint:recommended)
      'no-unused-vars': 'warn',
      'no-extra-semi': 'warn',

      // Стилистические правила (соответствуют твоему старому .eslintrc.js)
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/max-len': ['warn', { code: 100 }],
    },
  },
];
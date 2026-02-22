import stylistic from '@stylistic/eslint-plugin'

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

      // Стилистические правила
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      // ВАЖНО: всегда добавлять запятые в многострочных структурах
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      // ВАЖНО: для стрелочных функций - если тело в {}, то нужны скобки
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/max-len': ['warn', { code: 100 }],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multi-spaces': 'error',
      // Максимум одна пустая строка
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    },
  },
]

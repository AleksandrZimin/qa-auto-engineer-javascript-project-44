// import stylistic from '@stylistic/eslint-plugin';

// export default [
//   {
//     files: ['**/*.js'],
//     ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       sourceType: 'module',
//       globals: {
//         node: true,
//         es6: true,
//       },
//     },
//     plugins: {
//       '@stylistic': stylistic,
//     },
//     rules: {
//       // Возможные проблемы (из eslint:recommended)
//       'no-unused-vars': 'warn',
//       'no-extra-semi': 'warn',

//       // Стилистические правила (соответствуют твоему старому .eslintrc.js)
//       '@stylistic/indent': ['error', 2],
//       '@stylistic/linebreak-style': ['error', 'unix'],
//       '@stylistic/quotes': ['error', 'single'],
//       '@stylistic/semi': ['error', 'always'],
//       '@stylistic/comma-dangle': ['error', 'always-multiline'],
//       '@stylistic/arrow-parens': ['error', 'always'],
//       '@stylistic/max-len': ['warn', { code: 100 }],
//     },
//   },
// ];

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
        es6: true
      }
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      // Возможные проблемы (из eslint:recommended)
      'no-unused-vars': 'warn',

      // Стилистические правила
      '@stylistic/indent': ['error', 2],
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/quotes': ['error', 'single'],
      // Точки с запятой - НЕ использовать (как требует Хекслет)
      '@stylistic/semi': ['error', 'never'],
      // Добавляем правило для запятых в конце
      '@stylistic/comma-dangle': ['error', 'never'],
      // Скобки у стрелочных функций: один аргумент - без скобок
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/max-len': ['warn', { code: 100 }],
      // Обязательная пустая строка в конце файла
      '@stylistic/eol-last': ['error', 'always'],
      // Запрет на лишние пробелы в конце строк
      '@stylistic/no-trailing-spaces': 'error',
      // Запрет на лишние пробелы
      '@stylistic/no-multi-spaces': 'error'
    }
  }
]

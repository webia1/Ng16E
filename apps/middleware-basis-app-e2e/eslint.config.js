const baseConfig = require('../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'apps/middleware-basis-app-e2e/**/*.ts',
      'apps/middleware-basis-app-e2e/**/*.tsx',
      'apps/middleware-basis-app-e2e/**/*.js',
      'apps/middleware-basis-app-e2e/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'apps/middleware-basis-app-e2e/**/*.ts',
      'apps/middleware-basis-app-e2e/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'apps/middleware-basis-app-e2e/**/*.js',
      'apps/middleware-basis-app-e2e/**/*.jsx',
    ],
    rules: {},
  },
];

const baseConfig = require('../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'apps/middleware-basis-app/**/*.ts',
      'apps/middleware-basis-app/**/*.tsx',
      'apps/middleware-basis-app/**/*.js',
      'apps/middleware-basis-app/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: [
      'apps/middleware-basis-app/**/*.ts',
      'apps/middleware-basis-app/**/*.tsx',
    ],
    rules: {},
  },
  {
    files: [
      'apps/middleware-basis-app/**/*.js',
      'apps/middleware-basis-app/**/*.jsx',
    ],
    rules: {},
  },
];

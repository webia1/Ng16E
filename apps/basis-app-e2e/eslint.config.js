const { FlatCompat } = require('@eslint/eslintrc');
const baseConfig = require('../../eslint.config.js');
const js = require('@eslint/js');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
module.exports = [
  ...baseConfig,
  ...compat.extends('plugin:cypress/recommended'),
  {
    files: [
      'apps/basis-app-e2e/**/*.ts',
      'apps/basis-app-e2e/**/*.tsx',
      'apps/basis-app-e2e/**/*.js',
      'apps/basis-app-e2e/**/*.jsx',
    ],
    rules: {},
  },
];

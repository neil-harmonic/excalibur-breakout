module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off'
  },
  ignorePatterns: ['node_modules/**/*', 'public/src/**/*'],
  globals: {
    module: 'readonly',
    require: 'readonly'
  }
};

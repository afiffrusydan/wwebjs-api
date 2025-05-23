module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: 'standard',
  overrides: [
    {
      files: ['ecosystem.config.js'],
      rules: {
        'eslint-disable': true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'google',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': ['error', 'never'],
    'require-jsdoc': 'off',
    'quote-props': 'off',
    indent: 'off',
    semi: 'off'
  }
}

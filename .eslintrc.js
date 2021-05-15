module.exports = {
  extends: 'airbnb',
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prefer-es6-class': [1, 'always'],
    'import/extensions': [
      '.js',
      '.jsx'
    ]
  },
};

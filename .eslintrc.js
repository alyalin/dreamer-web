module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'prettier',
    '@vue/prettier',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};

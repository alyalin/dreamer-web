module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'prettier',
    '@vue/prettier',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};

module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:gridsome/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-indent': 'off',
    'vue/html-self-closing': 'off',
  },
};

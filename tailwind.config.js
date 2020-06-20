module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.vue',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'src/templates/**/*.vue',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};

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
    extend: {
      textColor: {
        primary: '#7ACB2C',
        accent: '#8EE13B',
        brown: '#412E2D',
      },
      backgroundColor: {
        accent: '#8EE13B',
      },
      fontFamily: {
        display: ['"Open Sans"'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['96px', { letterSpacing: '-0.02em', lineHeight: '96px' }],
      },
    },
  },
  variants: {
    width: ['responsive'],
  },
  plugins: [],
};

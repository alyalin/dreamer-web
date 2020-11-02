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
      borderColor: {
        primary: '#7ACB2C',
      },
      backgroundColor: {
        accent: '#8EE13B',
      },
      fontFamily: {
        display: ['"Open Sans"'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem'],
        '7xl': ['5rem'],
      },
      borderRadius: {
        'd-xl': '24px',
      },
      screens: {
        xl: '1300px',
      },
    },
  },
  variants: {
    width: ['responsive'],
  },
  plugins: [],
};

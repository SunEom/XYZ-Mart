const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    fontFamily: {
      alfa: ['Alfa Slab One'],
      noto: ['Noto Sans KR'],
      mont: ['Montserrat'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      mainRed: '#EE1C25',
      mainYellow: '#FFE100',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

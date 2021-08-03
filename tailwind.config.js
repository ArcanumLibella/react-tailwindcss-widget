module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bleu: {
        turquoise: '#5DD9C1',
        DEFAULT: '#308EC5',
        roi: '#112D55',
        light: '#EBF7FF'
      },
      vert: {
        malachite: '#53DD6C',
        DEFAULT: '#D7CF07',
        light: '#E7EBC2'
      },
      jaune: {
        soleil: '#FDBA35',
        DEFAULT: '#FFD166',
        light: '#FFE7AD'
      },
      rose: {
        bonbon: '#F58EA6',
        DEFAULT: '#F4CCCC',
        corail: '#FF475A',
        light: '#FFF7FC'
      },
      grey: {
        light: '#F9F9F9',
        DEFAULT: '#F0F0F0',
        dark: '#444444'
      },
      white: {
        DEFAULT: '#FFFFFF'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
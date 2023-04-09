module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple_primary: '#7209B6',
        purple_normal: '#C367FF',
        blue_primary: '#0CD5F0',
        blue_normal: '#76EFFF',
        blue_light: '#DBFBFF',
        blue_cero: '#F6FDFF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
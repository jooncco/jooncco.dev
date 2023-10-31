/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const {createThemes} = require('tw-colors');

module.exports = withMT({
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
    },
    fontFamily: {
      raleway: ['raleway', 'sans-serif'],
    },
  },
  darkMode: 'class',
  plugins: [
    createThemes({
      light: {
        base: '#FFFFFF',
        primary: '#7BC7E8',
        secondary: '#A3D8F4',
        neutral: '#F4F9F9',
      },
      dark: {
        base: '#000000',
        primary: '#4E188F',
        secondary: '#DA0037',
        neutral: '#0F0F0F',
      },
    }),
  ],
});

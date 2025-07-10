/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      gray: {
        '01': '#F8F8FA',
        '05': '#ECECF2',
        10: '#E2E2E3',
        20: '#D4D6D8',
        30: '#C3C6C9',
        40: '#ACB1B5',
        50: '#8B9197',
        60: '#686B70',
        70: '#515255',
        80: '#414246',
        90: '#2C2F32',
        100: '#000000',
      },
      primary: {
        '01': '#EBFFEE',
        '05': '#DAFFDE',
        10: '#CDFED3',
        20: '#9FFAA9',
        30: '#80F68D',
        40: '#41F957',
        50: '#3EEE2A',
        60: '#2BD718',
        70: '#1DB90C',
        80: '#0E8F00',
        90: '#096614',
        99: '#06460D',
      },
      function: {
        DEFAULT: '#FF7676',
      },
    },
    extend: {},
  },
  plugins: [],
}

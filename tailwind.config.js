/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}",  "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D'
        },
        customBlue: {
          light: '#4EA8DE',
          dark: '#1E6F9F'
        },
        customPuprle: {
          light: '#8284FA',
          dark: '#5E60CE'
        },
        customRed: {
          danger: '#E25858'
        }
      }
    },
  },
  plugins: [],
}


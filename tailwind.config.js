/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#633C35', // Exact legacy match
          light: '#8C5A5A',
          dark: '#452A25',
        },
        soft: {
          DEFAULT: '#FCFAF9', // Exact legacy bg
          accent: '#F2F2F2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'sans-serif'],
        accent: ['Give You Glory', 'cursive'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem', // Exact legacy radius
      }
    },
  },
  plugins: [],
}

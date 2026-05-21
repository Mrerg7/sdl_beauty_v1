/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand:  { DEFAULT: '#f5f0e8', 50: '#faf8f4', 100: '#f5f0e8', 200: '#ece3d5', 300: '#ddd2bc' },
        stone: { DEFAULT: '#2a2218', light: '#4a3d2c', faint: '#8c7e6a' },
        gold:  { DEFAULT: '#b8965a', light: '#d4b47a', dark: '#8c6e3a' },
        rose:  { DEFAULT: '#c4927a', light: '#dab49f' },
      },
    },
  },
  plugins: [],
};

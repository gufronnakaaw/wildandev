/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        recursive: ['var(--font-recursive)'],
      },
      colors: {
        gray: {
          50: '#e8e9e9',
          100: '#d1d2d2',
          200: '#a3a5a5',
          300: '#747978',
          400: '#464c4b',
          500: '#181f1e',
          600: '#131918',
          700: '#0e1312',
          800: '#0a0c0c',
          900: '#050606',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-0': '#d9d9d9',
        'gray-1': '#707070',
      }
    },
  },
  plugins: [],
}


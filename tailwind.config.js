/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'card': '#121212',
        'secondary': '#b3b3b3'
      },
      gridTemplateRows: {
        'layout': 'auto 4.5rem'
      },
      gridTemplateColumns: {
        'layout': '20rem auto'
      }
    },
  },
  plugins: [],
}


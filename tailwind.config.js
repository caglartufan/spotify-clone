/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'card': '#0c0c0c'
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


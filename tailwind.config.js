/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'card': '#121212',
        'secondary': '#b3b3b3',
        'highlight': '#1a1a1a',
        'tinted': 'rgba(255, 255, 255, 0.07)',
        'tinted-highlight': 'rgba(255, 255, 255, 0.1)',
        'tinted-press': 'rgba(255, 255, 255, 0.04)',
        'bright-accent': '#1ed760'
      },
      fontSize: {
        '2xs': '0.6875rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      boxShadow: {
        'standart': '0 6px 10px rgba(0, 0, 0, .6)',
        'library-cover': '0 4px 60px rgba(0, 0, 0, .5)'
      },
      gridTemplateRows: {
        'layout': 'calc(100% - 4.5rem - .5rem) 4.5rem'
      },
      gridTemplateColumns: {
        'layout': '20rem auto'
      }
    },
  },
  plugins: [],
}


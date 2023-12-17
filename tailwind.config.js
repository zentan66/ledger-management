/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      padding: {
        '1px': '12px',
        '2px': '25px'
      },
      colors: {
        theme: 'red',
        blue: {
          400: '#ddd',
          500: '#f1f1f1'
        }
      }
    },
  },
  plugins: [],
}


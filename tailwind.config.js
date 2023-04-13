/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'roxo': '#5700d3',
        'roxoclaro': '#cf36d5',
        'rosa': '#fe37ff',
        'preto': '#0d0d0d',
      },
    },
  },
  plugins: [],
}


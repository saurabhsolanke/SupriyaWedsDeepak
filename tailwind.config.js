/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A2026',
        accent: '#C5A059',
        'bg-light': '#F9F9F4',
        'bg-dark': '#3E2B2E',
        'text-dark': '#333333',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero_bg.jpeg')", /* Adjust path if needed or use inline for dynamic */
      }
    },
  },
  plugins: [],
}

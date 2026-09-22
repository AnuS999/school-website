/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: 'var(--primary-color, #1e3a8a)',
        brandSecondary: 'var(--secondary-color, #f59e0b)',
      }
    },
  },
  plugins: [],
}
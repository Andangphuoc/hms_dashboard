/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E7D32', // Green similar to Nutrizen
        secondary: '#F5F5F5', // Light gray background
      },
    },
  },
  plugins: [],
};
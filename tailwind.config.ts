/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#36454F',  // Charcoal gray for backgrounds
        'primary': '#8640B4',     // Main purple
        'secondary': '#69328F',   // Darker purple
        'accent': '#9BE9D8',      // Teal highlight
        'white-shade': '#F5F5F5', // Light white alternative for cards/paper
      },
    },
  },
  plugins: [],
};
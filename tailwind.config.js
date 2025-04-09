/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Looks through all files in src folder
    ],
    darkMode: 'class', // Enables class-based dark mode
    theme: {
      extend: {
        // You can customize your colors, fonts, etc. here
      },
    },
    plugins: [],
  };
  
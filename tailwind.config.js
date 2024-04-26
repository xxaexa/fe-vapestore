/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('./src/assets/images/main.jpg')",
      }
    },
  },
  plugins: [],
}


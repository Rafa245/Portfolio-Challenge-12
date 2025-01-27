/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind looks at your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

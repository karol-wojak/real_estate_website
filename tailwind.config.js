// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-solid': '#d7b27d', // This is the gold hex you used for icons
      },
      // Any theme extensions (like custom colors, spacing, etc.) would go here.
      // For your gradients, they are defined directly in CSS using :root variables and custom classes.
    },
  },
  plugins: [], // Add any official Tailwind plugins here if you use them (e.g., @tailwindcss/forms)
}

// postcss.config.js
export default {
  plugins: [
    // In Tailwind CSS v4, the @tailwindcss/postcss plugin handles everything.
    "@tailwindcss/postcss",
    // Autoprefixer is still needed for vendor prefixes.
    autoprefixer,
  ],
}

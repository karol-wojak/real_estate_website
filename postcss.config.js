// postcss.config.js
// Import autoprefixer here
import autoprefixer from 'autoprefixer';
// Import the Tailwind CSS PostCSS plugin
import tailwindcss from '@tailwindcss/postcss';

export default {
  plugins: [
    // In Tailwind CSS v4, the @tailwindcss/postcss plugin needs to be called as a function.
    tailwindcss(), // Correctly invoking the plugin
    // Autoprefixer is still needed for vendor prefixes.
    autoprefixer,
  ],
}

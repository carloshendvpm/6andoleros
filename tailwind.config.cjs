/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'space-mono':['Space mono', 'monospace']
      }
    },
  },
  plugins: [],
}

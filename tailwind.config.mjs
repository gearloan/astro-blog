/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // your font config
      },
      colors: {
        'aopa-dkblue': '#002a3a',
      },
    },
  },
  plugins: [],
};

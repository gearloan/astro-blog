/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
      gothamBold: ['"Gotham-Bold"', 'sans-serif'],
      gothamBoldItalic: ['"Gotham-BoldItalic"', 'sans-serif'],
      gothamBook: ['"Gotham-Book"', 'sans-serif'],
      gothamBookItalic: ['"Gotham-BookItalic"', 'sans-serif'],
      knockout94: ['"Knockout-94"', 'sans-serif'],
      knockout28: ['"Knockout-28"', 'sans-serif'],
      mercuryBold: ['"Mercury-Bold"', 'serif'],
      mercuryBoldItalic: ['"Mercury-BoldItalic"', 'serif'],
      mercuryRoman: ['"Mercury-Roman"', 'serif'],
      mercuryItalic: ['"Mercury-BookItalic"', 'serif'],
    },

      colors: {
        'aopa-dkblue': '#002a3a',
      },
    },
  },
  plugins: [],
};

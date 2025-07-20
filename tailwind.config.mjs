import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        // Core roles
        body: ['"Gotham-Book"', 'sans-serif'],
        bodyItalic: ['"Gotham-BookItalic"', 'sans-serif'],
        heading: ['"Knockout-94"', 'sans-serif'],
        subheading: ['"Knockout-28"', 'sans-serif'],

        // Serif editorial roles
        serif: ['"Mercury-Roman"', 'serif'],
        serifBold: ['"Mercury-Bold"', 'serif'],
        serifItalic: ['"Mercury-BookItalic"', 'serif'],

        // System roles
        ui: ['"Gotham-Bold"', 'sans-serif'],
        uiLabel: ['"Gotham-Bold"', 'sans-serif'], // + tracking-wide, uppercase
      },
      colors: {
        'aopa-dkblue': '#002a3a',
      },
      typography: ({ theme }) => ({
        editorial: {
          css: {
            fontFamily: theme('fontFamily.serif').join(', '),
            h1: { fontFamily: theme('fontFamily.serifBold').join(', ') },
            h2: { fontFamily: theme('fontFamily.serifBold').join(', ') },
            em: { fontFamily: theme('fontFamily.serifItalic').join(', ') },
            strong: { fontFamily: theme('fontFamily.serifBold').join(', ') },
          },
        },
        magazine: {
          css: {
            fontFamily: theme('fontFamily.body').join(', '),
            h1: { fontFamily: theme('fontFamily.heading').join(', ') },
            h2: { fontFamily: theme('fontFamily.subheading').join(', ') },
            blockquote: {
              fontFamily: theme('fontFamily.subheading').join(', '),
              fontStyle: 'normal',
              fontWeight: 'normal',
            },
            em: { fontFamily: theme('fontFamily.bodyItalic').join(', ') },
            strong: { fontFamily: theme('fontFamily.ui').join(', ') },
          },
        },
        feature: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.heading').join(', '),
              textTransform: 'uppercase',
              letterSpacing: theme('letterSpacing.wide'),
            },
            p: { fontFamily: theme('fontFamily.body').join(', ') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

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
        'aopa-ltblue': '#00a3e0',
        'aopa-dkblue': '#163372',
        'aopa-grey': '#5e5e5e',
        'aopa-dkgrey': '#333333',
        gray: {
          350: '#c4c9d1', // whatever hex you need
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // Handles a inside headings
            'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
              textDecoration: 'none',
              fontWeight: 'inherit',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            // Handles when a wraps the heading
            'a h1, a h2, a h3, a h4, a h5, a h6': {
              textDecoration: 'none',
              fontWeight: 'inherit',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            // Optional: also nuke underline on a generally
            'a': {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
        editorial: {
          css: {
            fontSize: theme('fontSize.base'), // default font size
            fontFamily: theme('fontFamily.serif').join(', '),
            h1: { 
              fontFamily: theme('fontFamily.serifBold').join(', '),
              fontSize: theme('fontSize.4xl'),

            },
            h2: { fontFamily: theme('fontFamily.serifBold').join(', ') },
            h3: { 
              fontFamily: theme('fontFamily.serifBold').join(', ') ,
              fontSize: theme('fontSize.lg'),
              lineHeight: theme('lineHeight.tight'), // ← this is what adds `leading-tight`
            },
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

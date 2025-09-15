// tailwind.config.js
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  safelist: ['order-1','order-2','order-3','lg:order-1','lg:order-2','lg:order-3'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        body:       ['var(--font-body, "Gotham-Book")', 'sans-serif'],
        bodyItalic: ['var(--font-body-italic, "Gotham-BookItalic")', 'sans-serif'],
        heading:    ['var(--font-heading, "Knockout-94")', 'sans-serif'],
        subheading: ['var(--font-subheading, "Knockout-28")', 'sans-serif'],

        serif:       ['var(--font-serif, "Mercury-Roman")', 'serif'],
        serifBold:   ['var(--font-serif-bold, "Mercury-Bold")', 'serif'],
        serifItalic: ['var(--font-serif-italic, "Mercury-BookItalic")', 'serif'],

        ui:      ['var(--font-ui, "Gotham-Bold")', 'sans-serif'],
        uiLabel: ['var(--font-ui-label, "Gotham-Book")', 'sans-serif'],
      },
      colors: {
        'aopa-ltblue': '#00a3e0',
        'aopa-dkblue': '#163372',
        'aopa-grey': '#5e5e5e',
        'aopa-dkgrey': '#333333',
        gray: { 350: '#c4c9d1' },
      },

      // PROSE PRESETS (Option A): read sizes/leading/tracking from CSS variables
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
              textDecoration: 'none',
              fontWeight: 'inherit',
              '&:hover': { textDecoration: 'underline' },
            },
            'a h1, a h2, a h3, a h4, a h5, a h6': {
              textDecoration: 'none',
              fontWeight: 'inherit',
              '&:hover': { textDecoration: 'underline' },
            },
            a: { textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
          },
        },

        editorial: {
          css: {
            // Body inside .prose-editorial
            fontFamily: theme('fontFamily.serif')[0],
            fontSize: 'var(--fs-body)',
            lineHeight: 'var(--lh-body)',

            h1: {
              fontFamily: theme('fontFamily.serifBold')[0],
              fontSize: 'var(--fs-heading)',
              lineHeight: 'var(--lh-heading)',
              letterSpacing: 'var(--ls-heading)',
            },
            h2: {
              fontFamily: theme('fontFamily.serifBold')[0],
              fontSize: 'var(--fs-subhead)',
              lineHeight: 'var(--lh-subhead)',
            },
            h3: {
              fontFamily: theme('fontFamily.serifBold')[0],
              fontSize: 'var(--fs-subhead)',
              lineHeight: 'var(--lh-subhead)',
            },
            em:    { fontFamily: theme('fontFamily.serifItalic')[0] },
            strong:{ fontFamily: theme('fontFamily.serifBold')[0] },

            // Optional UI roles within editorial prose
            '.ui': {
              fontFamily: theme('fontFamily.ui')[0],
              fontSize: 'var(--fs-ui)',
              lineHeight: 'var(--lh-ui)',
            },
            '.ui-label': {
              fontFamily: theme('fontFamily.uiLabel')[0],
              fontSize: 'var(--fs-ui-label)',
              lineHeight: 'var(--lh-ui-label)',
              letterSpacing: 'var(--ls-ui-label)',
              textTransform: 'var(--tt-ui-label)',
            },
          },
        },

        magazine: {
          css: {
            // Body inside .prose-magazine
            fontFamily: theme('fontFamily.body')[0],
            fontSize: 'var(--fs-body)',
            //lineHeight: 'var(--lh-body)',

            h1: {
              fontFamily: theme('fontFamily.heading')[0],
              fontSize: 'var(--fs-heading)',
              //lineHeight: 'var(--lh-heading)',
              //letterSpacing: 'var(--ls-heading)',
            },
            h2: {
              fontFamily: theme('fontFamily.subheading')[0],
              fontSize: 'var(--fs-subhead)',
              //lineHeight: 'var(--lh-subhead)',
            },
            h3: {
              fontFamily: theme('fontFamily.subheading')[0],
              fontSize: 'var(--fs-subhead)',
              //lineHeight: 'var(--lh-subhead)',
            },

            blockquote: {
              fontFamily: theme('fontFamily.subheading')[0],
              fontStyle: 'normal',
              fontWeight: 'normal',
            },
            em:    { fontFamily: theme('fontFamily.bodyItalic')[0] },
            strong:{ fontFamily: theme('fontFamily.ui')[0] },

            // Optional UI roles within magazine prose
            '.ui': {
              fontFamily: theme('fontFamily.ui')[0],
              fontSize: 'var(--fs-ui)',
              lineHeight: 'var(--lh-ui)',
            },
            '.ui-label': {
              fontFamily: theme('fontFamily.uiLabel')[0],
              fontSize: 'var(--fs-ui-label)',
              lineHeight: 'var(--lh-ui-label)',
              letterSpacing: 'var(--ls-ui-label)',
              textTransform: 'var(--tt-ui-label)',
            },
          },
        },

        feature: {
          css: {
            h1: {
              fontFamily: theme('fontFamily.heading')[0],
              // you can also read vars here if you want feature pages to share sizing logic:
              fontSize: 'var(--fs-heading)',
              //lineHeight: 'var(--lh-heading)',
              //letterSpacing: 'var(--ls-heading)',
              textTransform: 'uppercase',
              //letterSpacing: theme('letterSpacing.wide'),
            },
            p: { fontFamily: theme('fontFamily.body')[0] },
          },
        },
      }),
    },
  },

  plugins: [
    typography,
    // (Optional) If you truly need global fallbacks, add a tiny addBase later.
    // I’ve removed your previous addBase to avoid conflicts with prose variants.
  ],
};

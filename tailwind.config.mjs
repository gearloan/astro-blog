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
        uiLabel: ['var(--font-ui-label, "Gotham-Bold")', 'sans-serif'],
      },
      colors: {
        'aopa-ltblue': '#00a3e0',
        'aopa-dkblue': '#163372',
        'aopa-grey': '#5e5e5e',
        'aopa-dkgrey': '#333333',
        gray: { 350: '#c4c9d1' },
      },
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
            fontSize: theme('fontSize.base'),
            fontFamily: theme('fontFamily.serif').join(', '),
            h1: { fontFamily: theme('fontFamily.serifBold').join(', '), fontSize: theme('fontSize.4xl') },
            h2: { fontFamily: theme('fontFamily.serifBold').join(', ') },
            h3: {
              fontFamily: theme('fontFamily.serifBold').join(', '),
              fontSize: theme('fontSize.lg'),
              lineHeight: theme('lineHeight.tight'),
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
  // tailwind.config.js (only the plugins section changes)
  plugins: [
    typography,
    function ({ addBase, theme }) {
      const fam = (path) => {
        const v = theme(path);
        return Array.isArray(v) ? v.join(', ') : String(v ?? '');
      };

      addBase({
        'html, body': { fontFamily: fam('fontFamily.body') },

        // NEWS display
        'h1':                 { fontFamily: fam('fontFamily.heading') },
        'h2, h3, blockquote': { fontFamily: fam('fontFamily.subheading') },

        // Editorial emphasis
        'em':     { fontFamily: fam('fontFamily.serifItalic') },
        'strong': { fontFamily: fam('fontFamily.serifBold') },

        // UI chrome
        '.ui, nav, .btn, .badge': { fontFamily: fam('fontFamily.ui') },
        '.ui-label': {
          fontFamily: fam('fontFamily.uiLabel'),
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.wide'),
        },
      });
    },
  ],

};

const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1200px',
        // => @media (min-width: 1200px) { ... }

        xl: '1280px'
        // => @media (min-width: 1280px) { ... }
      },
      filter: { // defaults to {}
        none: 'none',
        grayscale: 'grayscale(1)',
        invert: 'invert(1)',
        sepia: 'sepia(1)',
        blur: 'blur(5px)'
      },
      backdropFilter: { // defaults to {}
        none: 'none',
        blur: 'blur(20px)'
      }
    }
  },
  variants: {
    borderStyle: ['responsive', 'hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    filter: ['responsive', 'hover'],
    backdropFilter: ['responsive']
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.2xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') }
      })
    }),
    require('tailwindcss-filters'),
    require('@tailwindcss/custom-forms')
  ]
}

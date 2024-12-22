/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: { 
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.6)', 
        'lg': '3px 3px 1px rgba(0, 0, 0, 1)',      
      },
      boxShadow: {
        'inset': 'inset 0px -5px 5px  rgba(26, 32, 44, .4)',
      },
    },
  },
  plugins: [ function({ addUtilities }) {
    const newUtilities = {
      '.text-shadow': {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
      },
      '.text-shadow-lg': {
        textShadow: '3px 3px 1px rgba(0, 0, 0, 0.9)',
      },
      '.shadow-inset': {
        boxShadow: 'inset 0px -5px 5px  rgba(26, 32, 44, .4)',
      },
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
  }],
}


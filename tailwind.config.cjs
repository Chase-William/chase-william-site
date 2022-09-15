/*
  Color Variables: https://daisyui.com/docs/colors/
  SvelteKit Guide: https://tailwindcss.com/docs/guides/sveltekit
  
  Import to scroll to the bottom and see that we can use various prefixes
  to apply our intented use of the color.
  Example:
    - bg-primary-content <-- Styles the background
    - text-primary-content <-- Styles the forground *(text)*
*/
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        theme: {
          primary: '#FFC914',
          secondary: '#59CD90',
          neutral: '#EDEDF4',
          // Base Colors for background | forground
          'base-100': '#EDEDF4',
          'base-200': '#636A7C'          
        },
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}

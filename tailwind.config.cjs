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
        mytheme: {
          'primary': "#FABC2A",
          //'primary': "#FABC2A",
          //'primary-content': "#FEFEFF",         
          // secondary: "#FABC2A", // Mango

          // Base Colors for background | forground
          'base-100': '#373A44',
          'base-200': '#636A7C',
          //'base-300': '#373A44',
          //'base-content': '#FEFEFF',

          'accent': '#445',

          'neutral': '#999'
        },
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}

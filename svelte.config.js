import adapter from '@sveltejs/adapter-netlify'; // netlify adapter for production
// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
    mdsvex({
      extensions: ['.svx', '.md']
    }), 
    preprocess()
  ],
	kit: {
		adapter: adapter() // Adapter for the build-kit we are targeting
	}
};

export default config;

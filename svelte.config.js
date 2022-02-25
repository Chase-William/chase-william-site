import adapter from '@sveltejs/adapter-netlify'; // netlify adapter for production
// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess()],
  
	kit: {
		adapter: adapter() // Adapter for the build-kit we are targeting
	}
};

export default config;

<script lang="ts">
  import Navigation from '../lib/Navigation.svelte'
  import Blog from '../lib/Blog.svelte'
  import Activity from '../lib/Activity.svelte'
  /* Blog Markdown Imports */
  // @ts-ignore
  import HoloLens2Blog from '../../static/markdown/blogs/hololens2-s1.md'
</script>

<main class="bg-base-100 text-base-content">
  <Navigation />  

  <Blog 
    title="The HoloLens 2 Development Experience"
    src="./chase-hololens2.jpg" 
    alt="Chase wearing the HoloLens2 while drinking a coffee.">
      <HoloLens2Blog/>
  </Blog>
</main>

<style>
  main {
		text-align: center;
		padding: 1em;
		margin: 0 auto; 
    max-width: 900px;
	}
</style>
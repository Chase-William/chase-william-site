<script lang="ts">
  import Navigation from '../../lib/Navigation.svelte'
  import Blog from '../../lib/Blog.svelte'
  /* Blog Markdown Imports */
  // @ts-ignore
  import HoloLens2Blog from '../../../static/markdown/blogs/hololens2-s1.md'
</script>

<main class="bg-base-100 text-base-content">
  <Navigation />  

  <Blog 
    title="My HoloLens 2 Development Experience"
    src="../chase-hololens2.jpg" 
    alt="Chase wearing the HoloLens2 while drinking a coffee.">
      <HoloLens2Blog/>
  </Blog>
</main>

<style>
  main {
		text-align: center;
		padding: 0.2em;
		margin: 0 auto; 
    max-width: 900px;
	}

  @media only screen and (min-width: 768px) {
    main {
      padding: 1em;
    }
  }

  @media only screen and (min-width: 992px) { }
  @media only screen and (min-width: 1200px) { }
</style>
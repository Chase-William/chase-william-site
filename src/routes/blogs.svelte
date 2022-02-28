<script lang="ts">
  import Navigation from '../lib/Navigation.svelte'
  import Blog from '../lib/Blog.svelte'
</script>

<main class="bg-base-100 text-base-content">
  <Navigation />
  <Blog 
    title="The HoloLens 2 Development Experience"
    src="./chase-hololens2.jpg" 
    alt="Chase wearing the HoloLens2 while drinking a coffee.">
    <div class="text-left" style="margin-top: 1em;">
      Filler
    </div>
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
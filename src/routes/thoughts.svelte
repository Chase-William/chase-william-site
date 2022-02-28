<script lang="ts">
  import Navigation from '../lib/Navigation.svelte'
  import Thought from '../lib/Post.svelte'
</script>

<main class="bg-base-100 text-base-content">
  <Navigation />
  <Thought 
    title="The HoloLens 2 Development Experience"
    src="./chase-hololens2.jpg" 
    alt="Chase wearing the HoloLens2 while drinking a coffee.">
    <div class="text-left" style="margin-top: 1em;">
      asd
    </div>
  </Thought>
</main>

<style>
  main {
		text-align: center;
		padding: 1em;
		margin: 0 auto; 
    max-width: 900px;
	}
</style>
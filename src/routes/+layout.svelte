<!-- Required for tailwind -->
<script>
	import Navbar from '$lib/Navbar.svelte';
	import '../app.css';
</script>

<div id="background" />
<header>
	<Navbar />
</header>
<div class="ml-auto mr-auto"> 
	<slot />
</div>

<style>
	#background {
		position: fixed;
		content: '';
		z-index: -1;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		filter: blur(0.7px);
		background-image: linear-gradient(white 2px, transparent 2px),
			linear-gradient(90deg, white 2px, transparent 2px),
			linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
		background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
		background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
	}
</style>

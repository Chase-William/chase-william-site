<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from './scene';
	// @ts-ignore
	let el: HTMLCanvasElement;

	onMount(() => {
		// @ts-ignore
		createScene(el);
	});
</script>

<!-- <button
  class="relative z-50 p-4 bg-primary ml-auto mr-auto rounded">
  Debug
</button> -->
<canvas bind:this={el} id="bg" class="absolute w-full h-full z-0 pb-3" />
<div class="absolute w-full h-full z-0 shadow acrylic" />

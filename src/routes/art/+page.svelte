<script lang="ts">
	import frame from '../../../static/art/perlin/frame-0.014804006.png';

	const images = [
		'frame-0.014804006.png',
		'frame-1.9724741.png',
		'frame-9.000987.png',
		'frame-16.188301.png',
		'frame-20.908712.png',
		'frame-35.82457.png',
		'frame-43.689735.png',
		'frame-47.40729.png',
		'frame-67.33655.png',
		'frame-71.5556.png',
		'frame-74.22879.png',
		'frame-80.31603.png',
		'frame-93.60562.png',
		'frame-120.478584.png',
		'frame-124.15153.png',
		'frame-127.62837.png',
		'frame-128.1343.png',
		'frame-134.56993.png',
		'frame-135.05214.png',
		'frame-146.69626.png',
		'frame-147.62679.png',
		'frame-165.02124.png',
		'frame-195.91779.png',
		'frame-210.14647.png',
		'frame-211.82323.png',
		'frame-217.88142.png',
		'frame-223.267.png',
		'frame-233.20226.png',
		'frame-234.66467.png',
		'frame-253.39583.png'
	];
</script>



<div class="flex flex-nowrap flex-col justify-center gap-5">
  <img src="art/avatar.png"/>
  <p class="bg-base-100 shadow-md p-5 rounded-md">
    I found an article written about using force fields and perlin noise to generate art <a href="https://sighack.com/post/getting-creative-with-perlin-noise-fields" target="_blank" class="font-semibold">here</a>. The art to be facinating leading me to download his codebase, however, it didn't work. After a little tinkering, I was able to get to functioning. Checkout my github <a href="https://github.com/Chase-William/perlin-art/" target="_blank" class="font-semibold">here</a> to download a functioning copy.
  </p>
	{#each images as name}
		<img src="art/perlin/{name}" class="rounded-md shadow-md" />
	{/each}
</div>

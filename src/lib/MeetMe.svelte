<!--
  The `MeetMe` component displays information about a person.
-->
<script lang="ts">
	import type Tag from 'src/types/Tag';
	import Tags from './Tags.svelte';

	export let src: string;
	export let alt: string;
	export let about: string;
	export let tags: Tag[];
</script>

<div>
	<div class="md:flex">
		<div class="flex relative w-40 md:w-96 m-auto md:ml-4">
			<div class="drop-shadow-lg absolute w-full h-full">
				<img
          id="blob" 
          alt="A moving blog shape behind my avatar." 
          src="avatar-bg.svg" />
			</div>
			<div class="flex justify-center rounded-full m-2 z-10">
				<img {src} {alt} class="p-2" />
			</div>
		</div>
		<h2>
			{about}
		</h2>
	</div>
	<div id="hr-tags">
		<div id="horizontal-line" />
		<Tags {tags} style="center" />
	</div>
</div>

<style>
	#blob {
		-webkit-animation: spin 4s linear infinite;
		-moz-animation: spin 4s linear infinite;
		animation: spin 4s linear infinite;
	}

	#horizontal-line {
		max-width: 1400px;
		margin-bottom: 0.2em;
		height: 2px;
		background-image: linear-gradient(to left, #0000, #fefeff, #fefeff, #0000);
	}

	img {
		width: 100%;
		border-radius: 50%;
	}

	h2 {
		margin: 0.5em 1em auto 1em;
		text-align: center;
	}

	@media only screen and (min-width: 500px) {
		#horizontal-line {
			margin-top: 1em;
		}

		h2 {
			text-align: left;
			margin: auto 1em;
		}
	}

	@media only screen and (min-width: 1200px) {
		#horizontal-line {
			position: relative;
			z-index: 0;
			/* margin: -6.0em auto 0 auto; */
		}
	}
</style>

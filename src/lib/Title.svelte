<script lang="ts">
	export let text: string;
	export let emoji: string;
	export let large: boolean = false;
</script>

{#if !large}
	{#if emoji}
		<div class="flex w-full justify-between p-4 rounded-md shadow-md bg-base-100">
			<p class="text-4xl">{text}</p>
			<p class="text-2xl mt-auto mb-auto">{emoji}</p>
		</div>
	{:else}
		<p class="text-4xl p-4 rounded-md shadow-md bg-base-100">{text}</p>
	{/if}
{:else}
	<div class="h-screen w-screen bg-base-100 shadow-md flex flex-col justify-center items-center">
		<img src="bg/projects-bg-50x-o.png" alt="Blurred code as a backdrop." class="h-screen w-screen absolute p-2 blur" />
		<p class="text-4xl z-10">{text}</p>
		<p id="demo" class="z-10">&nbsp;</p> <!-- Added non-breaking space to prevent layout shift when animation starts -->
		<script>
			var i = 0;
			const txt = 'Brewing more coffee!';
			const intervalSpeed = 100;
			const resetDelay = 2000;
			const p = document.getElementById('demo');

			function typeWriter() {
				if (i < txt.length) {
					p.innerHTML += txt.charAt(i);
					i++;
					setTimeout(typeWriter, intervalSpeed);
					return;
				}
				setTimeout(() => {
					p.innerHTML = '';
					i = 0;
					typeWriter();
				}, resetDelay);
			}

			var observer = new IntersectionObserver(
				function (entries) {
					// isIntersecting is true when element and viewport are overlapping
					// isIntersecting is false when element and viewport don't overlap
					if (entries[0].isIntersecting === true) typeWriter();
				},
				{ threshold: [0] }
			);

			observer.observe(p);
		</script>
	</div>
{/if}

<style>
</style>

<script lang="ts">
	export let text: string;
	export let emoji: string;
</script>

{#if emoji}
	<div class="flex w-full justify-between p-4 rounded-md shadow-md bg-base-100">
		<p class="text-4xl">{text}</p>
		<p class="text-2xl mt-auto mb-auto">{emoji}</p>
	</div>
  {:else}
  <p class="text-4xl p-4 rounded-md shadow-md bg-base-100">{text}</p>
{/if}

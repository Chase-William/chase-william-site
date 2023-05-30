<script lang="ts">
	import type Experience from 'src/types/Experience';
	import Title from './Title.svelte';

	export let experiences: Array<Experience>;
</script>

<Title text='Experience' emoji='💼'/>
<div class="flex flex-nowrap flex-col gap-5 p-4 bg-base-100 rounded shadow-md experience-anim">
	{#each experiences as experience}
		<div>
			<p class="text-xl font-semibold">{experience.title}</p>
			<p class="font-">{experience.description}</p>
			<p class="opacity-70">{experience.employer}</p>
			<p class="opacity-70">{experience.startDate} to {experience.endDate}</p>
		</div>
	{/each}
</div>

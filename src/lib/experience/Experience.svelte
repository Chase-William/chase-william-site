<script lang="ts">
	import type Experience from 'src/types/Experience';

	export let experience: Experience;
</script>

<div
	class="w-full p-4 bg-base-100 rounded-md shadow-md experience"
>
	<p class="text-xl font-semibold">{experience.title}</p>
	<p class="font-">{experience.description}</p>
	<p class="opacity-70">{experience.employer}</p>
	<p class="opacity-70">{experience.startDate} to {experience.endDate}</p>
	<slot name="content"/>
</div>

<script lang="ts">
	import type Experience from 'src/types/Experience';

	export let experience: Experience;
</script>

<div class="w-full bg-base-100 rounded-md shadow-md experience p-2 sm:p-4 sm:pb-4">
	<p class="text-xl font-semibold">{experience.title}</p>
	<div class="pl-2 pr-2">
		<p>{experience.description}</p>
		<p class="opacity-70">{experience.employer}</p>
		<p class="opacity-70">{experience.startDate} to {experience.endDate}</p>
	</div>
	<slot name="content"/>
</div>

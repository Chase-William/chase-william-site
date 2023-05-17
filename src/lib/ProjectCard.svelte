<!--
  The `ProjectCard` component displays information about a project.
-->
<script lang="ts">
	import type Tag from 'src/types/Tag';
	import NewBadge from './NewBadge.svelte';
	import Tags from './Tags.svelte';

	export let title: string;
	export let isNew: boolean = false;
	/**
	 * Omit src and provide a <svelte:fragment> to customize img rendering
	 */
	export let src: string | null = null;
	export let alt: string;
	export let tags: Tag[];
	export let github: string;
	export let nuget: string | null = null;
	export let chocolately: string | null = null;
</script>

<div class="project" id="project-card">
	<a id="project-icon" href={github} target="_blank">
		{#if src}
			<img {src} {alt} class="shadow-lg animated-icon" />
		{:else}
			<!-- This div has been added purely so the children elements still receive the hover animation -->
			<div class="animated-icon">
				<slot name="icon" class="icon" />
			</div>
		{/if}
	</a>
	<div id="project-info-container">
		<div id="project-header">
			<div id="name-with-tags">
				<div style="display: flex;">
					<h2 class="text-3xl text-left">
						{title}
					</h2>
					{#if isNew}
						<NewBadge />
					{/if}
				</div>
				<div id="tags">
					<Tags {tags} />
				</div>
			</div>
			<div id="goto-container">
				{#if github}
					<a
						class="github-button"
						href={github}
						data-show-count="true"
            data-size="large"
						aria-label="Star buttons/github-buttons on GitHub">Star</a
					>
        {/if}
				{#if nuget}
					<a href={nuget} target="_blank" class="btn btn-sm btn-outline btn-accent adjusted-btn">Nuget</a>
				{/if}
				{#if chocolately}
          <a href={chocolately} target="_blank" class="btn btn-sm btn-outline btn-accent adjusted-btn">Chocolately</a>
				{/if}
			</div>
		</div>
		<div id="project-body" class="bg-base-100/75 rounded-md shadow-md">
			<slot name="content" />
		</div>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

  .adjusted-btn {
    padding: 0 1em;
  }

	.animated-icon {
		transition: all 0.25s ease-in-out;
	}

	.animated-icon:hover {
		transform: scale(1.05);
	}

	#project-card {
		display: flex;
	}

	#project-info-container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		width: 100%;
		margin: auto 0;
	}

	#project-header {
		display: flex;
		flex-direction: row;
	}

	#name-with-tags {
		display: flex;
		flex-direction: column;
		width: 70%;
	}

	#goto-container {
		text-align: right;
		width: 30%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
	}

	#project-body {
		text-align: left;
		padding: 0.7em;
	}

	#project-icon {
		width: 55%;
		min-width: 100px;
		max-width: 250px;
		padding: 2em;
    display: block;
	}

	#tags {
		align-self: flex-start;
	}

	img {
		width: 100%;
		border-radius: 10%;
	}

	@media only screen and (max-width: 700px) {
		#project-card {
			display: block;
		}

		#project-icon {
			margin: 0 auto;
		}
	}
</style>

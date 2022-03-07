<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import BlogCard from './BlogCard.svelte'
  //export let items: SvelteComponent[]

  export let items: { title: string, href: string, description: string, tags: unknown[] }[]
</script>
  
{#each items as item}
  <!-- <svelte:component this={item} /> -->
  <BlogCard title={item.title} href={item.href} description={item.description} tags={item.tags}/>
{/each}


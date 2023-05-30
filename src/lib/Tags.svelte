<!--
  The `Tags` component displays an array of strings in little bubbles.
-->
<script lang="ts">
  import TextTag from './TextTag.svelte'
  import ImgTag from './ImgTag.svelte';
	import type Tag from 'src/types/Tag';

  /* Collection of tags to be displayed */
  export let tags: Tag[]
  export let style: string | null = null
</script>

<div {style} id="tags" class="relative z-50">
  {#if tags}
    {#each tags as tag}
      {#if !tag?.src} <!-- If an img src is not defined, display as text using alt -->
        <TextTag text={tag.alt} tooltip={tag.tooltip}/>
      {:else} <!-- Display img src based tag -->
        <ImgTag src={tag.src} alt={tag.alt}/>
      {/if}
    {/each}   
  {/if} 
</div>

<style>
  /* * { 
      border: solid #5B6DCD 2px;
  } */

  #tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  /* Custom global style for center aligning `Tags` */
  :global([style=center]) {
    justify-content: center;
  }
</style>
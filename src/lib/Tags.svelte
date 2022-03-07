<!--
  The `Tags` component displays an array of strings in little bubbles.
-->
<script lang="js">
  import Tag from './TextTag.svelte'
  import ImgTag from './ImgTag.svelte';

  /* Collection of tags to be displayed */
  export let tags
  export let style = undefined
</script>

<div {style} id="tags">
  {#if typeof tags !== 'undefined'}
    {#each tags as tag}
      <!-- If string[], display as normal tags -->
      {#if typeof tag === 'string'}
          <Tag text={tag}/>
        <!-- Check if this a valid -->
        {:else if tag.hasOwnProperty('src') && tag.hasOwnProperty('alt')}
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
<!--
  The `Tags` component displays an array of strings in little bubbles.
-->
<script lang="ts">
  /* Collection of tags to be displayed */
  export let tags: string[]
  export let style: string = undefined;
</script>

<div {style}>
  <!-- Generate tags from tags collection -->
  {#each tags as tag}
    <span class="badge-primary shadow-md expand-on-hover">{tag}</span>
  {/each}
</div>

<style>
  span {
    border: solid #7D869C55 2px;
    border-radius: 20px;
    padding: 0 1em;
    margin: 0.3em;
    font-size: smaller;
  }
  
  span:hover {
    transition: all .07s ease-in-out;
    transform: scale(1.05);
  }

  /* * { 
      border: solid #5B6DCD 2px;
    } */
</style>
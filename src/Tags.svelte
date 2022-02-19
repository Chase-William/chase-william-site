<!--
  The `Tags` component displays an array of strings in little bubbles.
-->
<script lang="ts">
  /* Collection of tags to be displayed */
  export let tags: string[]
</script>

<div id="tag-container">
  <!-- Generate tags from tags collection -->
  {#each tags as tag}
    <span>{tag}</span>
  {/each}
</div>

<style>
  span {
    border: solid #7D869C55 2px;
    border-radius: 20px;
    padding: 0 1em;
    margin: 0.3em;
  }

  /* * { 
      border: solid #5B6DCD 2px;
    } */

 #tag-container {
   display: flex;
   justify-content: start;
   flex-wrap: wrap;
 }
</style>
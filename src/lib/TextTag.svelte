<script lang="ts">
  export let text: string
  export let tooltip: string | null = null
</script>

{#if tooltip}
  <div class="badge-primary shadow-md hoverable-tag">
    <span>{text}</span>
  </div>
{:else}
  <span class="badge-primary shadow-md hoverable-tag">{text}</span>
{/if}

<style>
  .hoverable-tag {
    transition: all .1s ease;
    padding: 0 1em;
    margin: 0.3em;
    border: solid #FCCB25 2px;
    border-radius: 20px;
    font-size: smaller;
  }

  .hoverable-tag:hover {    
    transform: scale(1.05);
  }
</style>
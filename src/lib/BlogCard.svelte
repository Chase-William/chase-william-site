<script lang="ts">
  import Tags from "./Tags.svelte"

  export let title: string
  export let href: string
  export let description: string
  export let tags: unknown[]
</script>

<div class="bg-base-300 rounded-3xl drop-shadow-md">
  <h2><a href={href}>{title}</a></h2>
  <Tags tags={tags}/>
  <p>{description}</p>
</div>

<style>
  * {
    text-align: left;
  }

  div {
    padding: 1em;
  }

  a {
    text-decoration: underline; 
  }

  h2 {
    font-size: x-large;
  }
</style>
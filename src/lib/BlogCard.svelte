<script lang="ts">
  import Tags from "./Tags.svelte"
  import FunShape from "./FunShape.svelte";

  export let title: string
  export let href: string
  export let description: string
  export let tags: unknown[]

  // toggle state, relayed to child
  let toggled = false

  /**
   * Activates the group toggle
   * @param target
   */
  function activate(target: MouseEvent & { currentTarget: EventTarget & HTMLHeadingElement; }) {
    toggled = true
  }

  /**
   * Deactivates the group toggle
   * @param target
   */
  function deactivate(target: MouseEvent & { currentTarget: EventTarget & HTMLHeadingElement; }) {
    toggled = false
  }
</script>

<div class='blog-card'>
  <div style="margin: auto;">
    <FunShape toggled={toggled}/>  
  </div>  
  <div style="margin: auto 1em">
    <h2 
      on:mouseover={activate} 
      on:focus="{activate}" 
      on:mouseleave="{deactivate}"
    >
      <a href={href}>{title}</a>
    </h2>
    <Tags tags={tags}/>
    <p>{description}</p>
  </div>
</div>

<style>
  * {
    text-align: left;
  }

  .blog-card {
    display: flex;
  }

  a {
    text-decoration: underline; 
  }

  h2 {
    font-size: x-large;
  }


</style>
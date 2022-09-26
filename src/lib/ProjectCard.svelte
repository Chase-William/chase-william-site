<!--
  The `ProjectCard` component displays information about a project.
-->
<script lang="ts">
	import type Tag from 'src/types/Tag';
  import NewBadge from './NewBadge.svelte';
  import Tags from './Tags.svelte'

  export let title: string
  export let isNew: boolean = false
  /**
   * Omit src and provide a <svelte:fragment> to customize img rendering
   */
  export let src: string | null = null
  export let alt: string
  export let tags: Tag[]
  export let github: string
  export let nuget: string | null = null
  export let chocolately: string | null = null
</script>

<div class="project" id="project-card">
  <div id="project-icon">
    {#if src}
      <img src={src} alt={alt} class="shadow-lg animated-icon"/>
    {:else}
    <!-- This div has been added purely so the children elements still receive the hover animation -->
      <div class="animated-icon">
        <slot name="icon" class="icon"></slot>
      </div>      
    {/if}
  </div>
  <div id="project-info-container">
    <div id="project-header">
      <div id="name-with-tags">     
        <div style="display: flex;">          
          <h2 class="text-3xl text-left">
            {title}
          </h2>
          {#if isNew}
            <NewBadge/>
          {/if}          
        </div>         
        <div id="tags">
          <Tags tags={tags}/>
        </div>        
      </div>
      <div id="goto-container">
        {#if github}
          <p>Available on <a href="{github}" target="_blank" class="underline">Github</a></p>
        {/if}
        {#if nuget}
          <p>Published with <a href="{nuget}" target="_blank" class="underline">Nuget</a></p>
        {/if}
        {#if chocolately}
          <p>Available on <a href="{chocolately}" target="_blank" class="underline">Chocolately</a></p>
        {/if}
      </div>  
    </div>
    <div id="project-body" class="bg-base-100/75 rounded-md shadow-md">
      <slot name="content"></slot>  
    </div>
  </div>
</div>

<style>
  /* * { 
    border: solid #5B6DCD 2px;
  } */

  * {
    margin: 0;
    padding: 0;
  }

  .animated-icon {
    transition: all .25s ease-in-out;
  }

  .animated-icon:hover {
    transform: scale(1.05);
  }

  /* img {
    transition: all .25s ease-in-out;
  }

  img:hover {    
    transform: scale(1.05);
  } */

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
  }

  #project-body {
    text-align: left; 
    padding: 0.7em;   
  }

  #project-icon {
    width: 55%;
    min-width: 100px;
    max-width: 200px;
    padding: 2em;
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
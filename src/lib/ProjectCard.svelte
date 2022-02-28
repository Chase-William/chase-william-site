<!--
  The `ProjectCard` component displays information about a project.
-->
<script lang="ts">
  import Tags from './Tags.svelte'

  export let title: string;
  export let src: string
  export let alt: string
  export let tags: string[]
  export let github: string;
  export let nuget: string;
</script>

<div id="project-card">
  <div id="project-icon">
    <img src={src} alt={alt} class="shadow-lg"/>
  </div>
  <div id="project-info-container">
    <div id="project-header" style="display: flex;">
      <div id="name-with-tags">
        <h2 class="text-3xl text-left">
          {title}
        </h2>
        <div id="tags">
          <Tags tags={tags}/>
        </div>        
      </div>
      <div id="goto-container">
        {#if github !== ""}
          <p>Available on <a href="{github}" target="_blank" class="underline">Github</a>
        {/if}
        {#if nuget !== ""}
          Published with <a href="{nuget}" target="_blank" class="underline">Nuget</a>
        {/if}
      </div>  
    </div>
    <div id="project-body" class="font-light">
      <slot>
        <!-- Passed Components | HTML rendered here -->
      </slot>   
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

  img:hover {
    transition: all .25s ease-in-out;
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

  #name-with-tags {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  #goto-container {    
    width: 50%;
    text-align: right;
  }

  #project-body {
    text-align: left;    
  }

  #project-icon {
    width: 40%;
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
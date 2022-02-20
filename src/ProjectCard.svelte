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

<div style="display: flex;">
  <div id="img-container">
    <img src={src} alt={alt}/>
  </div>
  <div id="project-info-container">
    <div id="project-header" style="display: flex;">
      <div id="name-with-tags">
        <h2 style="text-align: left; font-weight: lighter;">
          {title}
        </h2>
        <div id="tags">
          <Tags tags={tags}/>
        </div>        
      </div>
      <div id="goto-container">
        {#if github !== ""}
          <p>Available on <a href="{github}" target="_blank">Github</a>
        {/if}
        {#if nuget !== ""}
          Published with <a href="{nuget}" target="_blank">Nuget</a>
        {/if}
      </div>  
    </div>
    <div id="project-body">
      <p>
        The plan for LilWidgets is to empower Xamarin.Forms developers by providing 
        unique custom controls that otherwise would take away from the core app development. 
        This repository will always be open source and under the MIT license. 
        Therefore, future releases and updates will be fully available.
      </p>
      <p style="margin-top: 0.5em;">
        Checkout the readme!
      </p>
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

  #img-container {
    width: 14%;
    padding: 2em;    
  }

  #tags {
    align-self: flex-start;    
  }  

  img {
    width: 100%;
    box-shadow: 5px 5px 5px #BBBD;
    border-radius: 10%;
  }

  a {
    text-decoration: underline;
    color: #08070899;
  }
</style>
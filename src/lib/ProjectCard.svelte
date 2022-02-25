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
    <img src={src} alt={alt}/>
  </div>
  <div id="project-info-container">
    <div id="project-header" style="display: flex;">
      <div id="name-with-tags">
        <h2 style="text-align: left; font-weight: lighter;">
          {title}
        </h2>
        <div id="tags">
          <Tags style="left" tags={tags}/>
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

  /* Custom global style for left aligning `Tags` */
  :global([style=left]) {
    display: flex;
    flex-wrap: wrap;
	}

  * {
    margin: 0;
    padding: 0;
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
    width: 14%;
    min-width: 100px;
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

  @media only screen and (max-width: 700px) { 
    #project-card {
      display: block;
    }

    #project-icon {
      margin: 0 auto;
    }
  }
</style>
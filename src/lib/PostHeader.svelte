<script lang="ts">
  import Tags from "./Tags.svelte";

  export let src: string
  export let alt: string
  export let title: string;
</script>

<div id="header">
  <div id="icon-container" class="shadow-lg bg-primary">
    <img src={src} alt={alt}/>
  </div> 
  <div style="margin: auto 1em;">
    <h2>
      {title}
    </h2>
    <div id="tags">
      <Tags tags={[
        'C#',
        {src: './mrtk.png', alt: 'Mixed Reality Toolkit'},
        {src: './unity.png', alt: 'Unity'},
        {src: './microsoft.png', alt: 'Microsoft'},
        'IL2CPP',
        'UWP',
      ]}/>
    </div>    
  </div>  
</div>

<style>
  /* * {
    border: solid #5B6DCD 2px;
  } */

  /* :global([style=center]) {
    justify-content: center;
  } */

  #header {
    display: flex;
    justify-content: center;
  }

  h2 {
    margin: auto;
    font-size: x-large;
  }

  img {
    width: 100%;
    border-radius: 50%;
  }

  #icon-container {
    max-width: 200px;
    min-width: 90px;
    display: flex;
    padding: 3px;
    justify-content: center;
    border-radius: 50%;
    margin: auto 0;
  }

  #tags {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
</style>
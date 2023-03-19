<script lang="ts">
	import type Tag from "src/types/Tag";
  import Tags from "./Tags.svelte";

  export let src: string
  export let alt: string
  export let title: string
  export let tags: Tag[]
</script>

<div id="header">
  <div id="icon-container" class="shadow-lg bg-primary">
    <img src={src} alt={alt}/>
  </div> 
  <div style="margin: auto 1em;">
    <h2>
      {title}
    </h2>
    <div>
      <Tags tags={tags}
        style='center'
      />
    </div>    
  </div>  
</div>

<style>
  /* * {
    border: solid #5B6DCD 2px;
  } */

  #header {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    margin: 0.5em auto;
    font-size: x-large;
    text-align: center;
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
    border-radius: 50%;
    margin: 15px auto;
  }

  @media only screen and (min-width: 768px) {
    #header {
      flex-direction: row;
    }

    h2 {
      margin: auto;
    }

    #icon-container {
      margin: auto 0;
    }
  }

  @media only screen and (min-width: 992px) { }
  @media only screen and (min-width: 1200px) { }
</style>
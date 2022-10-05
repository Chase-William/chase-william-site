<!--
  The `MeetMe` component displays information about a person.
-->
<script lang="ts">
	import type Tag from "src/types/Tag";
  import Tags from "./Tags.svelte"

  export let src: string
  export let alt: string
  export let about: string
  export let tags: Tag[]
</script>

<div id="main-about-container">
  <div id="about-container">
    <div id="selfie-container" class="shadow-lg bg-primary">
      <img src={src} alt={alt} />
    </div>
    <h2>
      {about}
    </h2>    
  </div>
  <div id="hr-tags">
    <div id="horizontal-line"/>
    <Tags tags={tags} style='center'/>
  </div>
</div>

<style>
  /* * { 
    border: solid #5B6DCD 2px;
  } */

  #about-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }	

  #horizontal-line {
    max-width: 1400px;
    margin-bottom: 0.2em;
    height: 2px;
    background-image: linear-gradient(to left, #0000, #FEFEFF, #FEFEFF, #0000);
  }

  img {
		width: 100%;
    border-radius: 50%;
	} 

  #selfie-container {
    max-width: 120px;
    min-width: 90px;
    display: flex;
    padding: 3px;
    justify-content: center;
    border-radius: 50%;
    margin: auto;
	}

	h2 {
		margin: 0.5em 1em auto 1em;
		text-align: center;
	}

  @media only screen and (min-width: 500px) { 
    #selfie-container {
      min-width: 110px;
    }

    #textual-content {
      display: flex;
      justify-content: baseline;
    }

    #about-container {
      display: flex;      
      flex-direction: row;
    }

    #selfie-container {
      margin: 0;
    }

    #horizontal-line { 
      margin-top: 1em;
    }

    h2 {
      text-align: left;
      margin: auto 1em;
    }
  }

  @media only screen and (min-width: 900px) { }

  @media only screen and (min-width: 1200px) { 
    #about-container {
      position: relative;
      z-index: 1;
    }

    #selfie-container {
      max-width: 200px;
      position: relative;
      z-index: 2;
    }

    img {
      position: relative;
      z-index: 3;
    }

    #horizontal-line {
      position: relative;
      z-index: 0;
      /* margin: -6.0em auto 0 auto; */
    }
  }
</style>
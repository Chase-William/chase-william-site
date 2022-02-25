<!--
  The `MeetMe` component displays information about a person.
-->
<script lang="ts">
  import Tags from "./Tags.svelte"

  export let src: string
  export let alt: string
  export let about: string
  export let tags: string[]
</script>

<div id="about-container">
  <div id="selfie-container" class="shadow-lg bg-secondary">
    <img src={src} alt={alt}/>
  </div>     
  <h2>
    {about}
  </h2>    
</div>
<div id="horizontal-line"/>
<div id="tags">
  <Tags tags={tags}/>
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
    margin: 2.5%;
    border-radius: 50%;
	} 

  #selfie-container {
    max-width: 120px;
    min-width: 90px;
    display: flex;
    border-radius: 50%;
    margin: auto;
	}

	h2 {
		margin: 1em;
    font-size: larger;
		text-align: center;
    font-weight: lighter;
	}

  @media only screen and (min-width: 500px) { 
    h2 {
      text-align: left;
      margin: auto 1em;
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
  }

  @media only screen and (min-width: 1300px) { 
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

    h2 {
      margin: 3.5em 0 0 1em;
    }

    #horizontal-line {
      position: relative;
      z-index: 0;
      margin: -6.0em auto 0 auto;
    }

    #tags {
      margin: 0.5em 0 0 7.0em;
    }
  }
</style>
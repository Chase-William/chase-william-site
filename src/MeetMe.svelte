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
  <div id="selfie-container">
    <img src={src} alt={alt}/>
  </div>     
  <h2>
    {about}
  </h2>    
</div>
<div id="horizontal-line"/>
<Tags tags={tags}/>

<style>
  /* * { 
    border: solid #5B6DCD 2px;
  } */

  #about-container {
    display: flex;
    justify-content: center;
  }	

  #horizontal-line {
    height: 2px;
    margin-top: 1.5em;
    background-image: linear-gradient(to left, #7D869C00, #7D869C66, #7D869C66, #7D869C00);
  }

  img {
		width: 100%;
    margin: 2.5%;
    border-radius: 50%;
	} 

  #selfie-container {
    max-width: 200px;
    min-width: 100px;
    width: 50%;
    display: flex;
    border-radius: 50%;
		box-shadow: 5px 5px 5px #BBBD;
	}

	h2 {
		margin: auto 1em;
    font-size: larger;
		text-align: left;
    font-weight: lighter;
	}

  section {
    width: 90%;
    margin: auto;
  }
</style>
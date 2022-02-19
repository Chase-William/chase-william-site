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

<section>
  <div style="width: 70%; margin: auto;">
    <div id="selfie-container">
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
</section>

<style>
  /* * { 
    border: solid #5B6DCD 2px;
  } */

  #tags {    
    width: 80%;
    margin: 0.7em auto;
  }

	div {
		width: 100%;
		display: flex;
	}

	#selfie-container {
    max-width: 100px;
		width: 30%;
		margin: auto 1em;
    border-radius: 50%;
		box-shadow: 5px 5px 5px #BBBD;    
	}

  #horizontal-line {
    height: 2px;
    margin-top: 1.5em;
    background-image: linear-gradient(to left, #7D869C00, #7D869C66, #7D869C66, #7D869C00);
  }

  img {
		width: 100%;
		margin: 0.2em;
		border-radius: 50%;
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
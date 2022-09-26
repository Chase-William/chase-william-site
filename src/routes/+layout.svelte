<!-- Required for tailwind -->

<script>
  import "../app.css"
</script>

<div id="background"/>
<div id="responsive-padded-container">
  <slot />
</div>

<style>
  #background {
    position: fixed;
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    filter: blur(0.7px);
    background-image: 
      linear-gradient(white 2px, transparent 2px),
      linear-gradient(90deg, white 2px, transparent 2px),
      linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px;
	}

  #responsive-padded-container {
    padding: 0.2em;
    max-width: 900px;
    margin: auto;
  }
  
  @media only screen and (min-width: 768px) {
    #responsive-padded-container {
      padding: 1em;
    }
  }

  @media only screen and (min-width: 992px) {
    #responsive-padded-container {
      padding: 2em;
    }
  }
  @media only screen and (min-width: 1200px) { }

  /* #background::before {
    content: '';    
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    filter: blur(1.5rem);
    transform: rotate(30deg);
    background: rgb(237,237,244);    
    background: linear-gradient(90deg, rgba(237,237,244,1) 17%, rgba(255,201,20,0.5) 22%, rgba(237,237,244,1) 28%, rgba(237,237,244,1) 40%, rgba(89,205,144,0.5) 44%, rgba(237,237,244,1) 49%, rgba(237,237,244,1) 66%, rgba(93,133,177,0.5) 71%, rgba(237,237,244,1) 75%);
  } */

  /* #background::before {
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: 
      linear-gradient(white 2px, transparent 2px),
      linear-gradient(90deg, white 2px, transparent 2px),
      linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px;
  } */
</style>
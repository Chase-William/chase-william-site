<div class="slider">
  <section>
    <slot />
  </section>  
</div>

<style>
	/* section {
		display: flex;
		gap: 1em;
		justify-content: space-evenly;
		flex-wrap: wrap;
	} */

	@media only screen and (min-width: 768px) {
		section {
      justify-content: center;
		}
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
  
	.slider {
		scroll-snap-type: x proximity;
		-webkit-overflow-scrolling: touch;
		overflow-x: scroll;
    scrollbar-width: thin;
    width: 95vw;
    left: 2.5%;
    position: absolute;
	}

	section {
		border-right: 1px solid white;
		padding: 1rem;
    display: flex;
    position: relative;
    gap: 1em;
		scroll-snap-align: start;
	}
</style>

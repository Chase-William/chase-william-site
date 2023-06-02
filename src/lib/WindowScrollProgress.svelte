<div id="window-progress-container">
	<progress 
    id="progress-on-scroll" 
    class="progress progress-secondary bg-base-100 w-screen m-0 p-0 rounded-none" 
    value="0" 
    max="100" />
	<script defer>
		const progressBar = document.getElementById('progress-on-scroll');
		// Adjust the progress on scroll and on window resize
		this.onscroll = () => updateWindowScrollPercentage();
		this.onresize = () => updateWindowScrollPercentage();

		function updateWindowScrollPercentage() {
			// this.innerHeight returns the content height of the viewport
			// this.document.documentElement.scrollHeight returns the entire scrollable height of the document
			// Difference in viewport height to document height... what if the document is smaller than the viewport?
			const viewportToDocumentHeightDiff =
				this.document.documentElement.scrollHeight - this.innerHeight;
			progressBar.value = (this.scrollY / viewportToDocumentHeightDiff) * 100;
		}
	</script>
</div>

<style>
	#window-progress-container {
		z-index: 99;		
		position: fixed;
		display: flex;
		justify-content: flex-start;
	}
</style>

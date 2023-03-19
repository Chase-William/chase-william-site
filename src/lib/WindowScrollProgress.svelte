
<div id="window-progress-container">
  <progress id="progress-for-window" class="progress progress-secondary w-56" value="0" max="100"></progress>
  <script defer>
    const progressBar = document.getElementById('progress-for-window')
    // Adjust the progress on scroll and on window resize
    this.onscroll = () => updateWindowScrollPercentage();
    this.onresize = () => updateWindowScrollPercentage();

    function updateWindowScrollPercentage() {  
      // this.innerHeight returns the content height of the viewport
      // this.document.documentElement.scrollHeight returns the entire scrollable height of the document
      // Difference in viewport height to document height... what if the document is smaller than the viewport?
      const viewportToDocumentHeightDiff = this.document.documentElement.scrollHeight - this.innerHeight
      progressBar.value = this.scrollY / viewportToDocumentHeightDiff * 100      
    }
  </script>
</div>

<style>
  #window-progress-container {
    z-index: 99;
    left: 0;
    top: 0;
    right: 0;
    position: fixed;
    display: flex;
    justify-content: flex-start;
  }

  #progress-for-window {
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 0;
  }
</style>
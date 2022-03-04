<script>
  
</script>

<div id="activity" class="shadow-md mockup-window bg-base-200 border border-primary">
  <div class="flex justify-center px-4 py-4 bg-base-100 border-t border-primary">
    <div class="text-left">
      <article class="prose max-w-none">
        <slot name="feed-1"></slot>
      </article>
      <div class="divider">
        <img src="github-squid-logo.png" style="max-width: 50px;" alt="Github Squid-Cat Logo"/>
      </div> 
      <article class="prose max-w-none">
        <slot name="feed-2"></slot>
      </article>
    </div>
  </div>
</div>
<style>
  #activity {
    max-width: 1100px;
    margin: 0 auto;
  }

  blockquote p {
    color: red;
  }
</style>
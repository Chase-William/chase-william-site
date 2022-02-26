<script>
  // @ts-ignore
  import SvelteActivity from '../../static/markdown/svelte.md';
</script>

<div id="activity" class="shadow-md mockup-window bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">
    <div class="text-left">
      <article class="prose max-w-none">
        <SvelteActivity />
      </article>
      <div class="divider">
        <img src="github-squid-logo.png" style="max-width: 50px;" alt="Github Squid-Cat Logo"/>
      </div> 
      <article class="prose max-w-none">
        <SvelteActivity />
      </article>
    </div>
  </div>
</div>
<style>
  #activity {
    max-width: 1100px;
    margin: 0 auto;
  }
</style>
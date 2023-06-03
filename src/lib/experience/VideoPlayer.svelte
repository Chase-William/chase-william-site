<script lang="ts">
  export let url: string;
  export let invert: boolean = false;
  export let description: string
</script>

<div class={`flex flex-wrap sm:flex-nowrap p-4 ${invert ? 'flex-row-reverse' : ''}`}>
  <iframe
    class="rounded shadow w-full sm:w-3/6 h-6/6"
    height="315"
    src={url}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
  <p class={`pt-4 sm:w-3/6 sm:${invert ? 'pr-4' : 'pl-4'}`}>{description}</p>
</div>
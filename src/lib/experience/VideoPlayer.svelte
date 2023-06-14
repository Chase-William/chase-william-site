<script lang="ts">
  export let url: string;
  export let invert: boolean = false;
  export let description: string
  export let title: string
</script>

<div class={`pb-4 flex flex-wrap sm:flex-nowrap ${invert ? 'flex-row-reverse' : ''}`}>
  <iframe
    class="rounded shadow w-full sm:w-3/6 h-6/6"
    height="315"
    src={url}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
  <div class={`pt-2 pr-2 sm:w-3/6 sm:${invert ? 'pr-4' : 'pl-4'} m-auto`}>
    <p class="text-xl font-semibold">{title}</p>
    <p class="pl-2">{description}</p>
  </div>
</div>
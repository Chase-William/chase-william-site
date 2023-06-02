<script lang="ts">
  export let url: string;
  export let invert: boolean = false;
</script>

<div class={`flex p-4 ${invert ? 'flex-row-reverse' : ''}`}>
  <iframe
    class="rounded shadow"
    width="560"
    height="315"
    src={url}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
  <p class="pl-4">Aside here talking about the damn video.</p>
</div>
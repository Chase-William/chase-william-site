<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string;
</script>

<div class="sm:w-2/6">
  <figure>
    <img
      class="rounded shadow"
      src={src}
      alt={alt}
    />
  </figure>
  <p class="pl-2 pr-2 pt-2 pb-4 text-center">{caption}</p>
</div>
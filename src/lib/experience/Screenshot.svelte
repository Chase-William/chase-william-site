<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string;
</script>

<div class="sm:w-2/6 p-2">
  <figure>
    <img
      class="rounded shadow"
      src={src}
      alt={alt}
    />
  </figure>
  <p class="mt-4">{caption}</p>
</div>
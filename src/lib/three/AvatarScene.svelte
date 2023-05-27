<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scene";
  // @ts-ignore
  let el;
  onMount(() => {
    // @ts-ignore
    createScene(el)
  });
</script>

<canvas 
  bind:this={el}
  class="absolute w-full h-full">
</canvas>

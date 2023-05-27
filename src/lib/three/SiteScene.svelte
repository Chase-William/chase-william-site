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
  id="bg"
  class="fixed w-full h-full">
</canvas>

<style>
  #bg {
    z-index: -1;
  }
</style>
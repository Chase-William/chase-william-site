<script lang="ts">
  export let count = 4
  export let toggled = false

  let elements = new Array(count)  
</script>


{#each elements as ele, i}
  <div class="triangle {i & 1 ? 'right': 'left'} {toggled ? 'toggled': ''}"></div> 
{/each}

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .triangle {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 30px solid hsl(var(--p));
    scale: 1.0;
    transition: scale 0.2s ease-in-out;
  }

  .right {
    transform: rotate(90deg);
  }

  .left {
    transform: rotate(-90deg);
  }

  .triangle:hover, .triangle:focus {
    scale: 1.25;
    transition: scale 0.2s ease-in-out;
  }

  .toggled {
    scale: 1.25;
    transition: scale 0.2s ease-in-out;
  }
</style>
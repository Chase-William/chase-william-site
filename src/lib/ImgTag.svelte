<script lang="ts">
  export let src: string
  export let alt: string
</script>

<img src={src} alt={alt} class="badge-primary shadow-md expand-on-hover"/>

<style>
 /* * {
    border: solid #5B6DCD 2px;
  } */

  img {
    border: solid #7D869C55 2px;
    border-radius: 20px;
    padding: 0 1em;
    margin: 0.3em;
    max-width: 100px;
  }
  
  img:hover {
    transition: all .07s ease-in-out;
    transform: scale(1.05);
  }

</style>
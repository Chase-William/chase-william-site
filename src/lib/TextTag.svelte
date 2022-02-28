<script lang="ts">
  export let text: string
</script>

<span class="badge-primary shadow-md expand-on-hover">{text}</span>

<style>
  span {
    border: solid #7D869C55 2px;
    border-radius: 20px;
    padding: 0 1em;
    margin: 0.3em;
    font-size: smaller;
  }
  
  span:hover {
    transition: all .07s ease-in-out;
    transform: scale(1.05);
  }
</style>
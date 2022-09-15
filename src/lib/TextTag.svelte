<script lang="ts">
  export let text: string
</script>

<span class="badge-primary shadow-md">{text}</span>

<style>
  span {
    border: solid #FCCB25 2px;
    border-radius: 20px;
    padding: 0 1em;
    margin: 0.3em;
    font-size: smaller;
    transition: all .1s ease;
  }
  
  span:hover {    
    transform: scale(1.05);
  }
</style>
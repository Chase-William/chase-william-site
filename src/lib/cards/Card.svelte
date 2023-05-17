<script lang="ts">
  export let title: string
  export let to: string
  export let date: string | null = null
  export let description: string | null = null
  export let src: string | null = null
  export let alt: string | null = null
</script>

<div 
  class="card bg-base-100 shadow-xl image-full">
  <figure><img src={src} alt={alt} /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    {#if description}
      <p>{description}</p>
      {:else}
      <slot/>
    {/if}
    <div class="card-actions justify-end">
      {#if date}
        <p style="margin: auto; opacity: 50%;">{date}</p>
      {/if}      
      <a href={to} target="_blank"><button class="btn btn-outline btn-accent">Read</button></a>
    </div>
  </div>
</div>
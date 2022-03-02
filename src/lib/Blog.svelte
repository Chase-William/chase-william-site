<script lang="ts">
  import BlogHeader from './BlogHeader.svelte'

  /* BlogHeader props */
  export let src: string
  export let alt: string
  export let title: string;
</script>

<BlogHeader src={src} alt={alt} title={title}/>
<div class="mockup-window bg-base-300 text-left" style="margin-top: 20px;">
  <div class="flex justify-center px-4 py-2 bg-base-200">
    <article class="prose max-w-none">  
      <slot/>
    </article>
  </div>  
</div>
<script lang="ts">
	import type Tag from "src/types/Tag";
	import BlogHeader from "./BlogHeader.svelte";


  /* BlogHeader props */
  export let src: string
  export let alt: string
  export let title: string
  export let tags: Tag[]
</script>

<BlogHeader 
  src={src} 
  alt={alt} 
  title={title}
  tags={tags}/>
<div class="mockup-window bg-base-200 text-left border border-primary drop-shadow-md" style="margin-top: 20px">
  <div class="flex justify-center px-4 py-2 bg-base-100 border-t border-primary">
    <article class="prose max-w-none">
      <slot/>
    </article>
  </div>  
</div>
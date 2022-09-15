<script lang="ts">
  import BlogHeader from './BlogHeader.svelte'

  /* BlogHeader props */
  export let src: string
  export let alt: string
  export let title: string
</script>

<BlogHeader 
  src={src} 
  alt={alt} 
  title={title}
  tags={[
    'C#',
    {src: '../mrtk.png', alt: 'Mixed Reality Toolkit'},
    {src: '../unity.png', alt: 'Unity'},
    {src: '../microsoft.png', alt: 'Microsoft'},
    'IL2CPP',
    'UWP',
  ]}/>
<div class="mockup-window bg-base-300 text-left border border-primary drop-shadow-md" style="margin-top: 20px">
  <div class="flex justify-center px-4 py-2 bg-base-100 border-t border-primary">
    <article class="prose max-w-none">
      <slot/>
    </article>
  </div>  
</div>
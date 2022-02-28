<script lang="ts">
  import ThoughtHeader from './PostHeader.svelte'

  /* ThoughtHeader props */
  export let src: string
  export let alt: string
  export let title: string;
</script>

<ThoughtHeader src={src} alt={alt} title={title}/>
<slot/>
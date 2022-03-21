<script lang="ts">
  import ListView from '../../lib/ListView.svelte'
</script>

<main class="bg-base-100 text-base-content" style="margin-top: 20px">
  <ListView items={[
    {
      title: 'My HoloLens 2 Development Experience',
      href:  'blog/holoLens2-blog',
      description: 'I share my experiences working on the HoloLens 2 with helpful information for anyone looking into it themselves!',
      tags: ['C#', 'Unity']
    }
  ]}/>
</main>

<style>
  main {
		text-align: center;
		padding: 0.2em;
		margin: 0 auto; 
    max-width: 900px;
	}

  @media only screen and (min-width: 768px) {
    main {
      padding: 1em;
    }
  }

  @media only screen and (min-width: 992px) { }
  @media only screen and (min-width: 1200px) { }
</style>
<script lang='ts'>
  import MeetMe from "../lib/MeetMe.svelte"
  import ProjectCard from "../lib/ProjectCard.svelte"
  import Tags from "../lib/Tags.svelte"
</script>

<main class="bg-base-100 text-base-content">
  <div>
    <MeetMe 
      src="chase.jpg"    
      alt="Chase William Roth"   
      about="Hello, I'm Chase 👋 I'm a 4th year Web and Mobile Computing undergraduate at Rochester Institute of Technology."
      tags={["C#", "TypeScript", "Xamarin", "Svelte ", "Java", "React", "GoLang"]}/>
  </div>

  <div id="content-body">
    <ProjectCard 
      title="Lil Widgets"
      src="lilwidgets.png" 
      alt="Lil Widgets"
      github="https://github.com/Chase-William/LilWidgets"
      nuget="https://www.nuget.org/packages/LilWidgets.Xamarin.Forms/1.1.1-alpha"
      tags={["C#", "Xaml", "Library", "Animation", "Nuget"]}/>
	
    <ProjectCard
      title="Blue Query"
      src="bluequery.png" 
      alt="Blue Query"
      github="https://github.com/Chase-William/BlueQuery"
      nuget=""
      tags={["C#", "Json", "Discord Bot"]}/>
	</div>
</main>

<style>
	main {
    font-family: 'Centaur', Courier, monospace;
		text-align: center;
		padding: 1em;
		margin: 0 auto;    
	}

  #content-body {
    max-width: 900px;
    margin: 5em auto;
    display: flex;
    flex-direction: column;
    row-gap: 3em;
  }

</style>
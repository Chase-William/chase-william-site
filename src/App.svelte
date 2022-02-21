<script lang='ts'>
  import MeetMe from "./MeetMe.svelte"
  import ProjectCard from "./ProjectCard.svelte"
  import Tags from "./Tags.svelte"
</script>

<main>
  <div>
    <MeetMe 
      src="chase.jpg"    
      alt="Chase William Roth"   
      about="Hello, I'm Chase 👋 I'm a 4th year Web and Mobile Computing undergraduate at Rochester Institute of Technology."
      tags={["C#", "TypeScript", "Xamarin", "Svelte ", "Java", "React", "GoLang"]}/>
  </div>

  <div class="divider"/>
  
  <div id="content-body">
    <ProjectCard 
      title="Lil Widgets"
      src="lilWidgets.png" 
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
    color: #7D869C;
    background-color: #FEFEFF;
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

  .divider {
    padding: 3em;
  }
</style>
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
      tags={["C#", "Xaml", "Xamarin", "asdasd ", "asdasd", "C#", "Xaml", "Xamarin", "asdasd "]}/>
  </div>

  <div class="divider"/>
  
  <div id="content-body">
    <ProjectCard 
      title="Lil Widgets"
      src="lilWidgets.png" 
      alt="Lil Widgets"
      github="https://github.com/Chase-William/LilWidgets"
      nuget="https://www.nuget.org/packages/LilWidgets.Xamarin.Forms/1.1.1-alpha"
      tags={["C#", "Xaml", "Animation"]}/>
	</div>
  <div id="content-body">
    <ProjectCard
      title="Blue Query"
      src="bluequery.png" 
      alt="Blue Query"
      github="https://github.com/Chase-William/BlueQuery"
      nuget=""
      tags={["C#", "Json", "Discord Bot"]}/>
	</div>
  <div id="content-body">
    <ProjectCard
      title=""
      src="" 
      alt=""
      github=""
      nuget=""
      tags={[]}/>
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
  }

  .divider {
    padding: 3em;
  }
</style>
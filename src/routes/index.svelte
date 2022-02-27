<script lang='ts'>
  import MeetMe from "../lib/MeetMe.svelte"
  import ProjectCard from "../lib/ProjectCard.svelte"
  import Tags from "../lib/Tags.svelte"
  import Activity from '../lib/Activity.svelte'
  import Navigation from '../lib/Navigation.svelte'

  /* FEEDS */
  // @ts-ignore
  import SvelteActivity from '../../static/markdown/feed/svelte-v1.md'
  // @ts-ignore
  import HoloLensActivity from '../../static/markdown/feed/hololens2-v1.md'

  /* PROJECTS */
  // @ts-ignore
  import LilWidgetsProject from '../../static/markdown/projects/lilwidgets.md'
  // @ts-ignore
  import BlueQueryProject from '../../static/markdown/projects/bluequery.md'
</script>

<main class="bg-base-100 text-base-content">
  <Navigation />
  <div>
    <MeetMe 
      src="chase.jpg"    
      alt="Chase William Roth"   
      about="Hello, I'm Chase 👋 I'm a 4th year Web and Mobile Computing undergraduate student at Rochester Institute of Technology."
      tags={["C#", "TypeScript", "Svelte ", "Xamarin", "Java", "React", "Go"]}/>
  </div>

  <div id="feed">
    <Activity>
      <SvelteActivity slot="feed-1"/>
      <HoloLensActivity slot="feed-2"/>
    </Activity>
  </div>

  <div id="content-body">
    <ProjectCard 
      title="Lil Widgets"
      src="lilwidgets.png" 
      alt="Lil Widgets"
      github="https://github.com/Chase-William/LilWidgets"
      nuget="https://www.nuget.org/packages/LilWidgets.Xamarin.Forms/1.1.1-alpha"
      tags={["C#", "Xaml", "Library", "Animation", "Nuget"]}>
      <LilWidgetsProject/> <!-- Lil Widgets Markdown -->
    </ProjectCard>
  
    <ProjectCard
      title="Blue Query"
      src="bluequery.png" 
      alt="Blue Query"
      github="https://github.com/Chase-William/BlueQuery"
      nuget=""
      tags={["C#", "Json", "Discord Bot"]}>
      <BlueQueryProject/> <!-- BlueQuery Markdown -->
    </ProjectCard>      
  </div>
</main>

<style>
	main {
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

  #feed {
    margin-top: 50px;
  }

  @media only screen and (min-width: 1300px) {
    #feed {
      margin-top: 90px;
    }
  }
</style>
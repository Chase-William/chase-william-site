<script lang='ts'>
  import MeetMe from "./MeetMe.svelte"
  import ProjectCard from "./ProjectCard.svelte"
import Tags from "./Tags.svelte"
</script>

<main>
	<div id="content-body">
		<MeetMe 
      src="chase.jpg"    
      alt="Chase William Roth"   
      about="Hello, I'm Chase 👋 I'm a 4th year Web and Mobile Computing undergraduate at Rochester Institute of Technology."
      tags={["C#", "Xaml", "Xamarin", "asdasd ", "asdasd", "C#", "Xaml", "Xamarin", "asdasd "]}/>
    <div class="divider"/>
    <ProjectCard 
      src="lilWidgets.png" 
      alt="Lil Widgets"/>
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
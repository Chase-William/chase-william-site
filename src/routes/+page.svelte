<script lang='ts'>
  import MeetMe from "$lib/MeetMe.svelte"
  import ProjectCard from "$lib/ProjectCard.svelte"
	import WindowScrollProgress from "$lib/WindowScrollProgress.svelte";
</script>

<svelte:head>
  <title>Welcome, ☕ Enjoy your stay!</title>
</svelte:head>
<!-- class="bg-gradient-to-r from-primary via-white via-[#5D85B1] via-white via-[#EE6352] via-white to-secondary" -->
<main>   
    <WindowScrollProgress/>
  
    <div id="meetme">
      <MeetMe 
        src="chase.jpg"    
        alt="Chase William Roth"   
        about="Hello, I'm Chase 👋 I'm a 4th year Web and Mobile Computing undergraduate student at Rochester Institute of Technology."
        tags={["C#", "TypeScript", "JavaScript ", "Xamarin", "Java", "Swift", "Kotlin"]}/>
    </div>

    <div id="content-body">
      <div>
        <p id="blog-reference-body" class="text-left bg-base-100/75 rounded-md shadow-md prose max-w-none">
          During the Summer, Fall, and Spring of 2021 I was employed by the Center on Culture and Language <em>(CCL)</em> at RIT/NTID and integrated live captioning into the HoloLens 2. My team and I after several months of prep competed in one of RIT's largest technical showcases / competitions; the RIT Imagine event. My team and two others won the TAD <em>(technology, arts, and design)</em> award, more information available <a href="https://www.rit.edu/imagine/news/three-student-teams-push-boundaries-improve-society-new-competition" target="_blank">here</a>, otherwise information about my HoloLens 2 development experience can be found <a href="./blogs/hololens2/" target="_blank">here</a>.
        </p>
      </div>  

      <ProjectCard
        title=".Docs"
        alt=".Docs"
        github="https://github.com/Chase-William/.Docs"
        chocolately="https://community.chocolatey.org/packages/dotdocs"
        tags={["NodeJs", "TypeScript", "Markdown", "Documentation"]}>
        <svelte:fragment slot="icon">
          <img alt=".Docs Icon" src="dotdocs-yellow-512x.png" class="shadow-lg" style="border-radius: 50%;">
        </svelte:fragment>
        <svelte:fragment slot="content">
          <article>
            <p>
              DotDocs is an intuitive & reliable documentation generator library for C# projects. Currently it produces markdown files as documentation and support for website generation is planned.
            </p>
          </article>
        </svelte:fragment>        
      </ProjectCard>

      <ProjectCard
      title=".Docs.Core"
      alt=".Docs.Core Icon"
      github="https://github.com/Chase-William/.Docs.Core"
      tags={["XML", "C# Projects", "C#", "BinLog", ".Net 6", "Json", "Recursion"]}>
      <svelte:fragment slot="icon">
        <img alt=".Docs.Core Icon" src="dotdocs.core-purple-512x.png" class="shadow-lg" style="border-radius: 50%;">
      </svelte:fragment>
      <svelte:fragment slot="content">
        <article>
          <p>
            This is a supporting library for the .Docs project. DocDocs.Core builds a .csproj and it's dependencies and extracts, organizes and exports types, assemblies, and project metadata to JSON files. 
          </p>
        </article>
      </svelte:fragment>        
    </ProjectCard>

      <ProjectCard 
        title="Lil Widgets"
        src="lilwidgets.png" 
        alt="Lil Widgets"
        github="https://github.com/Chase-William/LilWidgets"
        nuget="https://www.nuget.org/packages/LilWidgets.Xamarin.Forms/1.1.1-alpha"
        tags={["C#", "Xaml", "Library", "Animation", "Nuget"]}>
        <svelte:fragment slot="content">
          <article class="prose">
            <p>
              Lil Widgets is an open source user-interface widget library. I built this mainly during the winter of 2021 using Xamarin.Forms as a way to learn and also give back to the community. Checkout the demonstrative readme on github <a href="https://github.com/Chase-William/LilWidgets">here</a> to see the various widgets in action and even download the sample!
            </p>
          </article>
        </svelte:fragment>      
      </ProjectCard>
      
      <ProjectCard
        title="Blue Query"
        src="bluequery.png" 
        alt="Blue Query"
        github="https://github.com/Chase-William/BlueQuery"
        tags={["C#", "Json", "Discord Bot"]}>
        <svelte:fragment slot="content">
          <article class="prose">
            <p>
              Blue Query is a resource calculator discord bot I created during the summer of 2020. The name comes from the need to query blueprints and calculate their total cost using recursion. This was a fun build as I recall discovering and implementing recursion before I was made aware of the concept in school. Checkout the readme <a href="https://github.com/Chase-William/BlueQuery">here</a> on github to learn more!
            </p>
          </article>
        </svelte:fragment>        
      </ProjectCard>      
    </div>    
    <script>
      const options = {
        delay: 40,
        duration: 350,
        reset: true
      }

      ScrollReveal().reveal('#meetme', options)
      ScrollReveal().reveal('#blog-reference-body', options)
      ScrollReveal().reveal('.project', options)      
    </script>
</main>

<style>

  /* main::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: -1;
    filter: blur(1.5rem);
    transform: rotate(30deg);
    background: rgb(237,237,244);
    
background: linear-gradient(90deg, rgba(237,237,244,1) 17%, rgba(255,201,20,0.5) 22%, rgba(237,237,244,1) 28%, rgba(237,237,244,1) 40%, rgba(89,205,144,0.5) 44%, rgba(237,237,244,1) 49%, rgba(237,237,244,1) 66%, rgba(93,133,177,0.5) 71%, rgba(237,237,244,1) 75%);
  } */

  /* #textured {
    top: 0;
    bottom: 0;
    z-index: -1;
    background-image: 
      linear-gradient(white 2px, transparent 2px),
      linear-gradient(90deg, white 2px, transparent 2px),
      linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px;
  } */

  #content-body {
    display: flex;
    flex-direction: column;
    row-gap: 3em;
  }
 
  #blog-reference-body {
    margin: 0 0.2em;
    padding: 0.7em;    
  }

  @media only screen and (min-width: 768px) {    
    #blog-reference-body {
      margin: 0 0 0 2em;
      padding: 1em;
    }
  }

  @media only screen and (min-width: 992px) { }
  @media only screen and (min-width: 1200px) {
    #blog-reference-body {
      margin-top: 5em;
    }
  }
</style>
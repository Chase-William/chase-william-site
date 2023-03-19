<script lang="ts">
	import Card from '$lib/cards/Card.svelte';
	import CardGrid from '$lib/cards/CardGrid.svelte';
	import MeetMe from '$lib/MeetMe.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import WindowScrollProgress from '$lib/WindowScrollProgress.svelte';
</script>

<svelte:head>
	<title>☕ Welcome to Chase's site!</title>
</svelte:head>
<main>
	<WindowScrollProgress />

	<div id="meetme" style="margin-top: 1em;">
		<MeetMe
			src="me.jpg"
			alt="Chase William Roth"
			about="Hello, I'm Chase 👋 I'm a 5th year Web and Mobile Computing undergraduate student at Rochester Institute of Technology."
			tags={[
				{
					alt: 'C#',
					tooltip: 'C# was my first ❤️ and is my go to for anything not strictly web related.'
				},
				{
					alt: 'TypeScript',
					tooltip:
						'I like compile-time checks, type safety, and maintainability.. TypeScript is awesome!'
				},
				{ alt: 'JavaScript' },
				{
					alt: 'Xamarin',
					tooltip:
						"I learned my mobile fundamentals with Xamarin in school. I have since then learned how to use SwiftUI and Android's Jetpack Compose to build mobile apps too!"
				},
				{ alt: 'Java' },
				{
					alt: 'Swift',
					tooltip:
						'I really like how swift enforces nullables even on reference types. My time writing Swift has made me a better coder when it comes to considering nullables.'
				},
				{ alt: 'Kotlin' }
			]}
		/>
	</div>

	<div id="content-body">
		<!-- <p
			id="blog-reference-body"
			class="text-left bg-base-100/75 rounded-md shadow-md prose max-w-none"
		>
			During the Summer, Fall, and Spring of 2021 I was employed by the Center on Culture and
			Language <em>(CCL)</em> at RIT/NTID and integrated live captioning into the HoloLens 2. My
			team and I after several months of prep competed in one of RIT's largest technical showcases /
			competitions; the RIT Imagine event. My team and two others won the TAD
			<em>(technology, arts, and design)</em>
			award, more information available
			<a
				href="https://www.rit.edu/imagine/news/three-student-teams-push-boundaries-improve-society-new-competition"
				target="_blank">here</a
			>, otherwise information about my HoloLens 2 development experience can be found
			<a href="./blogs/hololens2/" target="_blank">here</a>.
		</p> -->

		<CardGrid>
			<Card
				title="Pivoting DotDocs 📃"
				to="blogs/dotdocs"
				description="I am pivoting my open source documentation generator for C# developers to operate from the cloud. Furthermore, I am developing a system that can connect project metadata so that their hosted documentation automatically links to others."
				date="10/5/2022"
			/>
			<Card title="HoloLens 2 Development 👓" to="blogs/hololens2">
				<p>
					During the Summer, Fall, and Spring of 2021 I was employed by the Center on Culture and
					Language <em>(CCL)</em> at RIT/NTID and integrated live captioning into the HoloLens 2. My
					team and I after several months of prep competed in one of RIT's largest technical
					showcases / competitions; the RIT Imagine event. My team and two others won the TAD
					<em>(technology, arts, and design)</em>.
				</p>
			</Card>
			<Card title="DotDocs - Initial Graph Database" to="blogs/dotdocs/neo/v1" date="2/4/2023">
				<p>
					After further development of the DotDocs project, the need of a library providing
					persistent storage has arrived. Therefore, and after much consideration, I will be using a
					graph database as the primary storage for assembly info. This update outlines my goals for
					the first iteration of implementation using Neo4j.
				</p>
			</Card>
			<Card
				title="DotDocs - 1st Neo4j Implementation Results"
				to="blogs/dotdocs/neo/v2"
				date="3/18/2023"
			>
				<p>
					With much careful planning, I am proud to say I have implemented neo4j into `DotDocs`.
					Storage of `Repository`, `Project`, `Assembly`, and `Type` nodes with the appropriate relationships now exist. Checkout this blog to read more and see some screenshots of the results.
				</p>
			</Card>
		</CardGrid>

		<div id="divider" />

		<ProjectCard
			title=".Docs"
			alt=".Docs"
			isNew={true}
			github="https://github.com/Chase-William/.Docs"
			chocolately="https://community.chocolatey.org/packages/dotdocs"
			tags={[
				{
					alt: 'NodeJs',
					tooltip:
						'This project uses Node.js to leverage the best web technologies available at the expensive of needing a sister project to feed it metadata from C# projects.'
				},
				{ alt: 'TypeScript' },
				{ alt: 'Markdown' },
				{ alt: 'Documentation' }
			]}
		>
			<svelte:fragment slot="icon">
				<img
					alt=".Docs Icon"
					src="dotdocs-yellow-512x.png"
					class="shadow-lg"
					style="border-radius: 50%;"
				/>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<article class="prose">
					<p>
						DotDocs is an intuitive & reliable documentation generator library for C# projects.
						Currently it produces markdown files as documentation and support for website generation
						is planned.
					</p>
				</article>
			</svelte:fragment>
		</ProjectCard>

		<ProjectCard
			title=".Docs.Core"
			isNew={true}
			alt=".Docs.Core Icon"
			github="https://github.com/Chase-William/.Docs.Core"
			tags={[
				{
					alt: 'XML',
					tooltip:
						'XML is present in both the .csproj files and generated documentation from Visual Studio. I actually analyze all .csproj files recursively and enable doc generation for each before building.'
				},
				{ alt: 'C# Projects', tooltip: 'A dependency graph is built from the .csproj files.' },
				{ alt: 'C#' },
				{
					alt: 'BinLog',
					tooltip:
						'I found the new BinLog file msbuild produces is a great choice for collection build information easily and quickly!'
				},
				{ alt: '.Net 6' },
				{ alt: 'Json' },
				{
					alt: 'Recursion',
					tooltip:
						'This project requires recursion everywhere because it collects every type used by the application in some sense. Therefore, I built recursive functions to search class inheritance, interface inheritance, generic type arguments, and more.'
				}
			]}
		>
			<svelte:fragment slot="icon">
				<img
					alt=".Docs.Core Icon"
					src="dotdocs.core-purple-512x.png"
					class="shadow-lg"
					style="border-radius: 50%;"
				/>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<article class="prose">
					<p>
						This is a supporting library for the .Docs project. DocDocs.Core builds a .csproj and
						it's dependencies and extracts, organizes and exports types, assemblies, and project
						metadata to JSON files.
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
			tags={[
				{ alt: 'C#' },
				{ alt: 'Xaml' },
				{ alt: 'Library' },
				{ alt: 'Animation' },
				{ alt: 'Nuget' }
			]}
		>
			<svelte:fragment slot="content">
				<article class="prose">
					<p>
						Lil Widgets is an open source user-interface widget library. I built this mainly during
						the winter of 2021 using Xamarin.Forms as a way to learn and also give back to the
						community. Checkout the demonstrative readme on github <a
							href="https://github.com/Chase-William/LilWidgets">here</a
						> to see the various widgets in action and even download the sample!
					</p>
				</article>
			</svelte:fragment>
		</ProjectCard>

		<ProjectCard
			title="Blue Query"
			src="bluequery.png"
			alt="Blue Query"
			github="https://github.com/Chase-William/BlueQuery"
			tags={[{ alt: 'C#' }, { alt: 'Json' }, { alt: 'Discord Bot' }]}
		>
			<svelte:fragment slot="content">
				<article class="prose">
					<p>
						Blue Query is a resource calculator discord bot I created during the summer of 2020. The
						name comes from the need to query blueprints and calculate their total cost using
						recursion. This was a fun build as I recall discovering and implementing recursion
						before I was made aware of the concept in school. Checkout the readme <a
							href="https://github.com/Chase-William/BlueQuery"
							target="_blank">here</a
						> on github to learn more!
					</p>
				</article>
			</svelte:fragment>
		</ProjectCard>
	</div>
	<script>
		const options = {
			delay: 40,
			duration: 350,
			reset: false
		};

		ScrollReveal().reveal('#meetme', options);
		ScrollReveal().reveal('#blog-reference-body', options);
		ScrollReveal().reveal('.project', options);
	</script>
</main>

<style>
	#content-body {
		display: flex;
		flex-direction: column;
		row-gap: 3em;
	}

	#blog-reference-body {
		margin: 0 0.2em;
		padding: 0.7em;
	}

	#divider {
		margin-top: 525px;
	}

	@media only screen and (min-width: 768px) {
		#blog-reference-body {
			padding: 1em;
		}

		#content-body {
			margin-top: 2em;
		}
	}

	@media only screen and (min-width: 992px) {
	}
	@media only screen and (min-width: 1200px) {
	}
</style>

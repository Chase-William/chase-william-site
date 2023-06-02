<script lang="ts">
	import Activity from '$lib/Activity.svelte';
	import Experience from '$lib/experience/Experience.svelte';
	import Screenshot from '$lib/experience/Screenshot.svelte';
	import VideoPlayer from '$lib/experience/VideoPlayer.svelte';
	import MeetMe from '$lib/MeetMe.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Title from '$lib/Title.svelte';
	import WindowScrollProgress from '$lib/WindowScrollProgress.svelte';
	import { experience } from '../types/Experience';
</script>

<svelte:head>
	<title>☕ Welcome to Chase's site!</title>
</svelte:head>
<main class="flex flex-col gap-8">
	<WindowScrollProgress />

	<div id="meetme" style="margin-top: 1em;">
		<MeetMe
			src="me-base.jpg"
			alt="Chase William Roth"
			about="Hello, My name is Chase 👋 I'm a 2023 graduate of Rochester Institute of Technology with a bachelor's degree in Web & Mobile Computing."
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
				{ alt: 'Tailwind' },
				{ alt: 'Svelte' },
				{ alt: 'NextJS' },
				{ alt: 'Three.js' }
			]}
		/>
	</div>

	<div class="bg-base-100 shadow-md p-5 rounded-md max-w-4xl m-auto">
		<p>
			Feel free to read below to learn more about me and head to the <code>Blogs</code> page to see my
			recent coding adventures.
		</p>
		<p class="text-2xl font-semibold mt-4">My Hobbies</p>
		<ul class="list-disc p-4 pt-2">
			<li><p>Weight Lifting 💪 / Calisthenics 🤸</p></li>
			<li><p>Coding</p></li>
			<li><p>Hiking</p></li>
			<li><p>Reading <em>(am currently reading the Wheel of Time by Robert Jordan)</em></p></li>
			<li><p>Playing the guitar 🎸</p></li>
			<li><p>Memorizing powerful quotes</p></li>
		</ul>
		<p class="text-2xl font-semibold">Weight Lifting?</p>
		<p>
			Growing up I've always been that extremely skinny kid who looked like <em>skin and bones</em>.
			Wanting to change this, during my fourth year of college a friend and I went to the weight
			room together. I bought protein powder and started <em>*eating big to get big*</em>. It was
			tough and not very rewarding in the beginning, however, as time drew on the impact of my
			consistent labor became apparent. Therefore, I have been lifting ever since and exploring new
			related avenues.
		</p>
		<p class="text-2xl font-semibold mt-4">The Wheel of Time? 📖</p>
		<p class="pt-2">
			If you like <strong>The Lord of the Rings</strong> trilogy or <strong>The Hobbit</strong>, I
			highly recommend checking out <strong>The Wheel of Time</strong> series by
			<em>Robert Jordan</em>. Robert Jordan sheds a new light on the fantasy J. R. R. Tolkien
			created. The best part is, there are 14 long books to enjoy with a writing style I found more
			palatable than Tolkien's.
		</p>
	</div>

	<Title text="Experience 💼" large={true} />

	<div class="max-w-4xl m-auto flex flex-col gap-8">
		<Experience
			experience={experience(
				'HoloLens 2 App Developer',
				'Research and develop technologies to integrate interpreting & captioning services into the HoloLens 2 space.',
				'Rochester Institute of Technology, NTID Research Center on Culture and Language',
				'May 26th',
				'May 14th'
			)}
		>
			<svelte:fragment slot="content">
				<div class="flex p-4">
					<figure class="w-2/6">
						<img
							class="rounded shadow"
							src="experience/hololens2/the_young_man.jpg"
							alt="Chase wearing a hololens 2 covered by a beanie and also drinking coffee."
						/>
					</figure>
					<p class="pl-4">Text about why I am wearing a beanie and stuff here.</p>
				</div>
				<section>
					<VideoPlayer url="https://www.youtube.com/embed/Bv_y8Jvgq3A" />
					<VideoPlayer invert={true} url="https://www.youtube.com/embed/3VzgaB38mPw" />
				</section>
			</svelte:fragment>
		</Experience>
		<Experience
			experience={experience(
				'Mobile App Developer',
				'Built an Android and iOS application professionally for a client with the application, BabyFingers, published to both Google & Apple app stores.',
				'Rochester Institute of Technology, ICS Department',
				'August 20th',
				'January 21st'
			)}
		>
			<svelte:fragment slot="content">
				<p class="text-4xl text-center p-4">Final Product Screenshots</p>
				<div class="flex flex-wrap">
					<Screenshot
						src="experience/babyfingers/home_page.png"
						alt="Babyfingers homepage."
						caption="So this is just a caption above the above image is all. Just some simple words about the work."
					/>
					<Screenshot
						src="experience/babyfingers/quiz_attempts_page.png"
						alt="Babyfingers quiz attempts page."
						caption="So this is just a caption above the above image is all. Just some simple words about the work."
					/>
					<Screenshot
						src="experience/babyfingers/taking_quiz_page.png"
						alt="Babyfingers taking quiz page."
						caption="So this is just a caption above the above image is all. Just some simple words about the work."
					/>
				</div>
			</svelte:fragment>
		</Experience>
		<Experience
			experience={experience(
				'Human Resource IT Intern',
				'Optimize HR interactions through automation by evaluating requirements and performing test in an isolated tenant.',
				'The Dow Chemical Company, Human Resources IT Department',
				'May 16th',
				'August 5th'
			)}
		/>
		<Experience
			experience={experience(
				'Teaching Assistant',
				'Provide instructional support to students and professors (C#, Github, general coding skills).',
				'Rochester Institute of Technology',
				'January 21st',
				'April 25th'
			)}
		/>
		<Experience
			experience={experience(
				'Lead Tutor',
				'Support student learning by explaining concepts and how to apply them. Maintenance of tutoring website.',
				'Rochester Institute of Technology, ICS Department Peer Tutoring Program',
				'January 20th',
				'May 5th'
			)}
		/>
	</div>

	<Title text="Personal Projects 🚧" />

	<div class="max-w-4xl m-auto flex flex-col gap-8">
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

	<div class="p-10" />

	<script>
		const options = {
			delay: 40,
			duration: 350,
			reset: false
		};

		ScrollReveal().reveal('#meetme', options);
		ScrollReveal().reveal('#blog-reference-body', options);
		ScrollReveal().reveal('.project', options);
		ScrollReveal().reveal('.experience', options);
	</script>
</main>

<style>
	main {
		animation: fadeInAnimation ease 3s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	@keyframes fadeInAnimation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>

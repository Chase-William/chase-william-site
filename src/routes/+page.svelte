<script lang="ts">
	import Experience from '$lib/experience/Experience.svelte';
	import Screenshot from '$lib/experience/Screenshot.svelte';
	import VideoPlayer from '$lib/experience/VideoPlayer.svelte';
	import MeetMe from '$lib/MeetMe.svelte';
	import ProjectCard from '$lib/ProjectCard.svelte';
	import Title from '$lib/Title.svelte';
	import { experience } from '../types/Experience';
</script>

<svelte:head>
	<title>☕ Welcome to Chase's site!</title>
</svelte:head>

<main class="flex flex-col gap-8">
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

	<div class="bg-base-100 shadow-md rounded-md max-w-4xl m-auto p-2 sm:p-4">
		<p class="pl-2 pr-2 text-center pb-4">
			<em>
				Feel free to read below and learn more about me or head over to the <code>Blogs</code> page to
				browse my recent coding adventures.
			</em>
		</p>
		<p class="text-2xl font-semibold">My Hobbies</p>
		<ul class="list-disc pl-6 pr-2 pb-4">
			<li>Coding</li>
			<li>Weight Lifting 💪 / Calisthenics 🤸</li>
			<li>Hiking</li>
			<li>Reading <em>(am currently reading the Wheel of Time by Robert Jordan)</em></li>
			<li>Playing the guitar 🎸</li>
			<li>Memorizing powerful quotes</li>
		</ul>
		<p class="text-2xl font-semibold">Weight Lifting?</p>
		<p class="pl-2 pr-2 pb-4">
			Growing up I've always been that extremely skinny kid who looked like <em>skin and bones</em>.
			Wanting to change this, during my fourth year of college a friend and I went to the weight
			room together. I bought protein powder and started <em>*eating big to get big*</em>. It was
			tough and not very rewarding in the beginning, however, as time drew on the impact of my
			consistent labor became apparent. Therefore, I have been lifting ever since and exploring new
			related avenues.
		</p>
		<p class="text-2xl font-semibold">The Wheel of Time? 📖</p>
		<p class="pl-2 pr-2 pb-4">
			If you like <strong>The Lord of the Rings</strong> trilogy or <strong>The Hobbit</strong>, I
			highly recommend checking out <strong>The Wheel of Time</strong> series by
			<em>Robert Jordan</em>. Robert Jordan sheds a new light on the fantasy J. R. R. Tolkien
			created. The best part is, there are 14 long books to enjoy with a writing style I found more
			palatable than Tolkien's.
		</p>
	</div>

	<Title text="My Experience 💼" large={true} />

	<div class="max-w-4xl m-auto flex flex-col gap-8">
		<Experience
			experience={experience(
				'Human Resource IT Intern',
				'Optimize HR interactions through automation by evaluating requirements and performing test in an isolated tenant.',
				'The Dow Chemical Company, Human Resources IT Department',
				'May 16th',
				'August 5th'
			)}
		>
			<svelte:fragment slot="content">
				<div>
					<figure class="pb-2">
						<img
							class="max-w-md m-auto p-4 w-full"
							src="experience/dow/dow_logo.png"
							alt="Dow logo."
						/>
						<figcaption class="pl-2 pr-2">
							During the summer of 2022, I had the opportunity to be employed by The Dow Chemical
							Company as a Human Resources IT Intern. Throughout my stay near Dow's head quarters in
							Midland Michigan, I learned about their culture, values, and more.
						</figcaption>
					</figure>
					<VideoPlayer
						title="Product Tracking App"
						description="During my intership, I participated in an event known as the createathon where 7 teams of interns presented their ideas on how to improve the company to an auidence with only 1 week to prepare. Only three teams could win, and my team was one of the three winning the popular vote."
						url="https://youtube.com/embed/iviDBpIG-RA"
					/>
					<section class="pl-2 pr-2 pb-4">
						<p>
							Our idea was an app allowing Dow employees to easily acquire more information about
							batches of product being sent to and from Dow facilities. An employee could simply
							scan a QR code with their phone and have all the information they need about a batch
							of product at their finger tips. This app would be beneficial as the current system
							doesn't allow easy lookups on product information across different facilities.
						</p>
						<p class="pt-2">
							During my team's presentation, I had a segment where I conducted a live demo with
							audience interaction. To acheive this, I asked for everyone to scan a QR code
							available on the current slide with their phone routing them to <a
								class="underline"
								target="_blank"
								href="https://dow-tracking-example.netlify.app/">our site</a
							>. Then, I had them click the <strong>Scan to Start</strong> button to scan another QR
							containing the ID of a batch. They were then presented with the demo shown above.
						</p>
					</section>
					<figure>
						<img
							class="rounded shadow"
							src="experience/dow/dow_plant.jpg"
							alt="Dow's facility from a distance."
						/>
            <figcaption>
              Taken in Midland, MI at the Dow Diamond overlooking distant Dow facilities.
            </figcaption>
					</figure>
					<p class="pt-2 pl-2 pr-2">
						Overall, my employment by The Dow Chemical Company was rememberable and pleasant as the
						people and company culture have no doubt been paramount to the success found since the
						original founding in 1897.
					</p>
				</div>
			</svelte:fragment>
		</Experience>
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
				<section class="flex flex-wrap mt-2">
					<p class="text-2xl font-semibold pt-16 pb-12 m-auto">Winning RIT Image 2022</p>
					<figure>
						<img
							src="experience/hololens2/TADFinnerty.jpg"
							alt="Winners of the 2022 TAD Competition"
							class="rounded shadow"
						/>
            <figcaption>
              My team won the 2022 RIT Imagine <a
							class="underline"
							target="_blank"
							href="https://www.rit.edu/news/three-student-teams-push-boundaries-improve-society-new-competition"
							>TAD <em>(Technology, Art and Design)</em></a
						> competition after a long day of presenting.
            </figcaption>
					</figure>
				</section>
				<p class="text-2xl font-semibold text-center pt-16 pb-12">HoloLens 2 Demo Videos</p>
				<section class="mt-4">
					<VideoPlayer
						title="Captioning Demo"
						url="https://www.youtube.com/embed/Bv_y8Jvgq3A"
						description="In this video I demonstrate live captioning where my computer acts as the sender and the HoloLens 2 the receiver. On my computer, I was running an RIT captioning program sending my captions to a server. The HoloLens 2 was connected to a session and received captions via a Socket.IO connection."
					/>
					<VideoPlayer
						title="Interpreting Demo"
						invert={true}
						url="https://www.youtube.com/embed/3VzgaB38mPw"
						description="In this video I showcase a live interpreting demonstration through the HoloLens 2. This application was built using Unity and Microsoft's Mixed Reality Took Kit (MRTK). I reverse engineered Microsoft's debug panel which uses quaternions and expanded on it to create the functionality seen."
					/>
				</section>
				<section class="pt-4 flex flex-wrap">
					<figure class="sm:w-2/6">
						<img
							class="rounded shadow"
							src="experience/hololens2/the_young_man.jpg"
							alt="Chase wearing a hololens 2 covered by a beanie and also drinking coffee."
						/>
					</figure>
					<div class="pr-2 pt-2 sm:pl-4 sm:w-4/6 m-auto">
						<p class="text-xl font-semibold">Gotta Get Comfy</p>
						<p class="pl-2">
							I took this picture as a joke as it would often take several minutes for building and
							deployment to finish. Therefore, my running gag was, "<em
								>you gotta get comfy when workingon the HoloLens 2.</em
							>". This gag is most applicative when building apps with Unity, not so much standalone
							UWP.
						</p>
						<p class="pt-2 pl-2">
							It was an iteresting experience and could often be frustrating as I had not much
							experience prior with Unity, and moreover being "early adopters". If you want to know
							more, checkout my HoloLens 2 blog!
						</p>
					</div>
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
				<p class="text-xl pt-4">Primary Features</p>
				<ul class="list-disc pl-6 pr-2">
					<li>Learn ASL signs in categories</li>
					<li>Quiz your knowledge of each category</li>
					<li>Receive a grade for each quiz taken</li>
					<li>Choose your theme preference (light/dark)</li>
					<li>Available for both Android & iOS</li>
				</ul>
				<p class="text-2xl font-semibold pt-16 pb-12 text-center">Final Project Screenshots</p>
				<div class="flex flex-nowrap gap-2">
					<Screenshot
						src="experience/babyfingers/home_page.png"
						alt="Babyfingers homepage."
						caption="The homepage is where users can select their prefered category to explore. "
					/>
					<Screenshot
						src="experience/babyfingers/quiz_attempts_page.png"
						alt="Babyfingers quiz attempts page."
						caption="The Quiz Attempts page provided users with a list of quiz results and the option to take another."
					/>
					<Screenshot
						src="experience/babyfingers/taking_quiz_page.png"
						alt="Babyfingers taking quiz page."
						caption="The Quiz page is where users actually quiz themselves."
					/>
				</div>
			</svelte:fragment>
		</Experience>
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

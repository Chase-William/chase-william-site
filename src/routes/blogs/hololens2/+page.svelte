<script lang="ts">
	import Blog from '$lib/Blog.svelte';
	import WindowScrollProgress from '$lib/WindowScrollProgress.svelte';
</script>

<WindowScrollProgress />

<Blog
	title="My HoloLens 2 Development Experience"
	src="/chase-hololens2.jpg"
	tags={[
		{ alt: 'C#' },
		{ src: '/mrtk.png', alt: 'Mixed Reality Toolkit' },
		{ src: '/unity.png', alt: 'Unity' },
		{ src: '/microsoft.png', alt: 'Microsoft' },
		{ alt: 'IL2CPP' },
		{ alt: 'UWP' }
	]}
	alt="Chase wearing the HoloLens2 while drinking a coffee."
>
	<section>
		<p>
			For about a year, I have been developing apps for the HoloLens 2 in both Unity and in the
			standalone Univeral Windows Platform <em>UWP</em> environment. My work with the HoloLen 2 began
			during the summer 2021 and has continued throughout following Fall and Spring semesters. In this
			time, I have experienced firsthand the pros and cons of being an early adopter. To elaborate, new
			technology is often perceived as cool, cutting edge, and is hyped for good reason, but behind closed
			doors when developing for this tech, it can be quite frustrating. So in this blog I'll talk about
			my experiences, what I learned, and share important information retaining to the HoloLens 2.
		</p>
		<h3>About the HoloLens 2</h3>
		<p>
			To provide a little context about the HoloLen 2, it is an augmented <em>(or mixed-reality)</em
			> headset that was released in the late months of 2019. An augmented reality device combines the
			phyiscal world with the virtual, so you may perceive both simultaneously. Unlike it's predecessor
			the HoloLens 1; the HoloLens 2 is built on the Arm64 architecture. It uses a minified version of
			Windows 10 as it's operating system.
		</p>
		<blockquote>
			I found the architecture choice of Arm64 to be a limitation when it came to using 3rd party
			libraries. Reason being, most Windows devices are x64 & x86 so finding Arm64 support can be
			difficult. It is important mention that the HoloLens 2 uses this architecture for important
			reasons, such as leveraging better performance and battery life.
		</blockquote>
		<p>
			Feel free to read more about the HoloLens 2's specs <a
				href="https://docs.microsoft.com/en-us/hololens/hololens-release-notes">here</a
			>.
		</p>
		<h3>Getting Started 🎬</h3>
		<p>
			pinch Getting started with a standalone UWP app for the HoloLens 2 is much simplier than a
			Unity based app. Unity has a learning curve and will set you back with knowing how to navigate
			their user-interface and also setting up the environment with the Mixed Reality Toolkit <em
				>(MRTK)</em
			>. Now if you are developing the app as a standalone UWP app, you will want to know how to use
			XAML and UWP specific apis. If you are developing the app using Unity and the MRTK, you won't
			touch XAML as the MRTK is kind of your UI framework.
		</p>
		<ul>
			<li>
				UWP - To get started with UWP for the HoloLens 2 you need the Univeral Windows Workload
				installed for Visual Studio <em>(preferably 2019|2022 - I used 2022 Preview)</em>.
			</li>
			<li>
				Unity - To get started, I recommend using <a href="https://unity3d.com/get-unity/download"
					>Unity Hub</a
				>
				as it allows you to organize your projects and Unity editor installations. Once that is
				installed you want to use the
				<a href="https://github.com/microsoft/MixedRealityToolkit-Unity">MRTK</a> repo to guide you because
				there is some setup needed.
			</li>
		</ul>
		<p>
			Generally speaking, UWP is the way to go I found for starting off. Learn how to debug and
			deploy apps here before moving into the realm of Unity and the MRTK.
		</p>
		<h3>User-Interface Creation 🖼️</h3>
		<p>Creating user interfaces in each respective project is vastly different.</p>
		<ul>
			<li>
				Standalone UWP - Creating user-interfaces in a UWP app for the HoloLens 2 is essentially the
				same as for desktop. No special packages to install or anything which is great! However,
				just know to generally make controls larger than one would think.
			</li>
			<li>
				Unity - Creating user-interfaces in Unity was time consuming and rather difficult because of
				the 3d space. To make the user interfaces I used the MRTK which provides templates you can
				use. One of the challenging aspects when getting started making a 3d gui is the ui's
				distance from the user.
			</li>
		</ul>
		<p>
			When I would share my app with other individuals in my team they would sometimes perfer the
			controls to be closer or farther away. An individual can always use the pinch gesture to click
			something out of reach, but this method is generally slower and less fluent than it's counter
			part <em>(just tapping a cotrol with your actual finger)</em>.
		</p>
		<h3>Compilation/Linking 🏗️</h3>
		<ul>
			<li>
				Standalone UWP - In my experience, compiling and linking in UWP is pretty much plug and
				play. You don't need to do any extra work to get things up and running. This includes 3rd
				party dependencies, as they're added into your build as you'd expect.
			</li>
			<li>
				Unity - In unity for apps that don't require managed plugins, you can expect things to just
				work. I must mention that compilation & linking of your C# scripts to the native app can
				take awhile <em>(5 to 9 minutes depending on your level of compilation optimization)</em>.
				If you're used to quick compilations and things like hot reload, this is going to be a rough
				ride.
			</li>
		</ul>
		<blockquote>
			There are steps you can take to reduce compilation times like disabling optimize mesh data.
			Even then, Unity must compile your C# to an intermediate language called IL2CPP <em
				>(Intermediate Language to C++.. what a clever name)</em
			> and then that is compiled via the native compiler to your binary (app). This double compilation/linking
			and not to mention compiling C++ which is notorious for long build times.. well, get yourself some
			☕.
		</blockquote>
		<p>
			Now, lets remove the suspension from your ride, because you want to use some managed plugins.
			Managed plugins that do not have dependencies won't raise a threat, unless you're using
			reflection. In most cases though, you'll be importing/using plugin that does have
			dependencies. This is where a serious problem in my opinion exist related to the developer
			experience. When you import a managed plugin with dependencies you need to import the
			dependencies manually & recursively for all the dependencies not already supported by Unity.
			In other words, you need to add every dependency of your plugin and the dependencies of each
			dependency until Unity supports the rest.
		</p>
		<blockquote>
			In my experience, I had a plugin that was dependent on a nuget package and some system
			libraries like System.Text.Json. Therefore, like I stated above, I had to manually get the
			.dlls and add them to my unity project.
		</blockquote>
		<p>
			At this point you're cruising down a rocky road in a car without suspension; its time to
			remove your seat. Code stripping is an important part of reducing the size of your app bundle,
			but when combining managed plugins & Unity's rules regarding reflection; it can be hazardous.
			I found that using a <a
				href="https://github.com/jilleJr/Newtonsoft.Json-for-Unity/wiki/Reference-link.xml"
				>link.xml</a
			> file in my plugins folder helped resolve some of my issues with linking. That file allows you
			omit properties, methods, and entire libraries from code stripping.
		</p>
		<blockquote>
			The MRTK actually uses link.xml in their unity package to prevent code stripping of their
			packages.
		</blockquote>
		<h3>Deployment 📦</h3>
		<p>
			Following the common trend here, deploying binaries to the HoloLens 2 from a standalone UWP
			app is a simpler process than Unity.
		</p>
		<ul>
			<li>
				Deployment of standalone UWP apps through Visual Studio is straight forward. Using Remote
				Machine deployment allows you deploy to the device wirelessly and supports live debugging.
				You can also choose the Publish option which creates a bundle and that can be quickly
				deployed to your device using an ad-hoc approach.
			</li>
			<li>
				Deployment in Unity can vary depending on what you're trying to achieve. If you are trying
				to debug your application you need to follow this checklist <a
					href="https://docs.microsoft.com/en-us/windows/mixed-reality/develop/unity/managed-debugging-with-unity-il2cpp"
					>here</a
				>. Even following the docs I had issues getting my breakpoints to be hit. That aside, if you
				still want to get your app onto the device for testing build and run works well. If you want
				to make a distrubutable package I found using build and then opening the Visual Studio
				IL2CPP project and manually packaing worked best.
			</li>
		</ul>
		<blockquote>
			One of the confusing things about building your C# to IL2CPP is you want to target release
			mode for debugging...
		</blockquote>
		<p>
			Overall from getting started to deployment, I found vast differences in the developer
			experience for standalone UWP apps to Unity ones. UWP standalone is much simpler, reliable,
			and overall is a much better option for testing before you migrate to Unity. The main problem
			with standalone UWP is you have no access to the 3d space. So if you need access to the 3d
			space you must get comfortable with Unity and learn how to use the MRTK. I have omitted some
			other short comings in this blog, but overall a lot of great work has been done to get the
			HoloLens 2 where it is now. The api's provided by MRTK are powerful and Microsoft has done a
			great job! I look forward to what is yet to come and hopefully issues I have mentioned here
			can get some tender loving care!
		</p>
	</section>
</Blog>

<style>
	@media only screen and (min-width: 768px) { }
	@media only screen and (min-width: 992px) { }
	@media only screen and (min-width: 1200px) { }
</style>

<script>
	import Blog from '$lib/Blog.svelte';
	import WindowScrollProgress from '$lib/WindowScrollProgress.svelte';
</script>

<WindowScrollProgress />

<Blog
	title="Pivoting My Personal Project"
	src="../dotdocs-yellow-512x.png"
	tags={[
		{ alt: 'NodeJs' },
		{ alt: 'TypeScript' },
		{ alt: 'C#' },
		{ alt: '.NET 6.0' },
		{ alt: 'Markdown' }
	]}
	alt="The dotdocs icon."
>
	<article>
		<h3>DotDocs Origin</h3>
		<p>
			The original idea for dotdocs was to provide C# developers with a local tool to generate
			documentation in markdown from their projects. This entire process existed on the user’s
			machine. I found this currently works fine, but when considering future ideas like website
			generation and binding sites together using a central registry; this approach isn’t ideal.
			Therefore with drastic change on the horizon, I decided another perspective would be
			invaluable. I met with Bryan French <em>(a professor at RIT)</em> and explained the concept of
			dotdocs with its current state to its ideal future state. He introduced new ideas I had never considered
			like creating and using github repositories to store the generated sites. He also mentioned security
			and made a valid point of how private repositories are unlikely to trust my service. Lastly, Bryan
			mentioned how users prefer to avoid installations which I knew, but it was another thing to hear
			him emphasize this. After resting on our conversation for several weeks, I have reached a conclusion.
			DotDocs still has great potential, but ultimately needs a pivot.
		</p>

		<h4>Pivot Points</h4>
		<ul>
			<li>
				<h5>Installation</h5>
				<p>
					I choose a framework dependent approach for deployment because my users, .NET 6.0
					developers, may already have .NET 6.0 installed. Therefore, I can use their installation
					and prevent shipping my product with all .NET 6.0 runtime libraries. This reduced shipment
					size by over 100mb which is around 80% smaller. However, if a developer doesn’t have .NET
					6.0 installed, would they be willing to install it? They don’t even know if my product
					works so installing .NET 6.0 is one hell of a hurdle just to see if it works. It would be
					ideal if I could remove installation so there is no barrier to entry.
				</p>
			</li>
			<li>
				<h5>"<em>but it works on my computer</em>"</h5>
				<p>
					As a hobbyist, student developer, tutor, and a student at RIT, I am hard pressed to find
					time to test environments <em>(and do I want to? Hell no!)</em>. As the complexity and
					dependency needs of dotdocs grows, so do the quantity of contingencies. How much time will
					I spend in the future attempting to fix bugs described in a github issue post. Pulling
					dotdocs off the user’s machine, and into forsay, a docker container in the cloud would
					eliminate platform related issues. Moreover, this thought reveals another issue; what
					platforms do I support?
				</p>
			</li>
			<li>
				<h5>Cross-Platform Capabilities</h5>
				<p>
					Dotdocs depends on two technologies: node.js and NET 6.0. Both of these are compatible
					with all major platforms and my framework approach makes .NET 6.0 compatible too <em>
          (users have .NET 6.0 assemblies for their platform installed)</em>. However, I use a 
          tool to compile my node.js project into an exe… yea, so that means I
					would need to generate different assemblies for the node.js project for each platform.
					Moreover, I cannot be certain my platform agnostic C# codebase will work well on all
					platforms as I do a lot of pathing and IO operations. It would sure be great if I could
					just eliminate all these complexities.
				</p>
			</li>
		</ul>
		<h3>DotDocs Pivot</h3>
		<p>
			The pivot is moving dotdocs from the user’s machine to a containerized approach operating in
			the cloud. This increases control and security while reducing platform related contingencies
			allowing for increased developer velocity. Essentially, this approach will allow me to focus
			on adding value to dotdocs by eliminating the pivot points mentioned above. However, the new
			approach introduces new challenges of its own, as I have never made a fully cloud based
			application before. I see this as an opportunity to learn and follow my passion into a new
			mysterious domain reinforced by analysis that this is the optimal path for dotdocs. To
			conclude, I know this pivot has steered me towards a long path, therefore I am going to make
			sure to release updates like this along my journey.
		</p>

		<h4>The New Mission Statement</h4>
		<p>
			"<em
				>DotDocs provides C# developers with an easy online documentation generator that offers
				hosting of resulting documentation.</em
			>"
		</p>
		<blockquote>
			Yes, dotdocs shall generate documentation as before, but now can automatically integrate it
			into its centralized website. This will provide C# developers with a free and optional
			location to host their generated documentation site. More updates coming…
		</blockquote>
	</article>
</Blog>
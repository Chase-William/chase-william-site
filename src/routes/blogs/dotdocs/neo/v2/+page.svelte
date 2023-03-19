<script>
	import Blog from '$lib/Blog.svelte';
	import WindowScrollProgress from '$lib/WindowScrollProgress.svelte';
	import Gist from "$lib/Gist.svelte";
</script>

<WindowScrollProgress />

<Blog
	title="My Neo4j C# Project Database"
	src="../../../../neo4j-v1-entire-cluster.png"
	tags={[{ alt: 'Neo4j' }, { alt: 'C#' }, { alt: '.NET' }]}
	alt=""
>
	<article>
		<p>Neo4j is a graph database that uses Cypher as its query language.</p>

		<p>
			My initial implementation of Neo4j was an overall positive experience, however, I did
			encounter some difficulties along the way.
		</p>

		<p>
			During my last Spring semester at RIT, I spent a vast majority of my Spring Break <em
				>[3/11/2023 - 3/19/2023]</em
			> planning this implementation. The documentation I am referring to can be checked out here on
			my project’s github wiki. I meticulously designed each node, its properties, and its core relationships.
			With all this planning, I still, however, wasn’t sure about how everything may work. Therefore,
			instead of documenting/planning based on assumptions, I took what concrete knowledge I knew and
			began experimenting.
		</p>

		<p>
			The first order of business was inserting a repository, its projects, their assemblies, and
			their types into my Neo4j instance. I found the abundance of relationships/dependencies
			combined with asynchronous operations made this tricky to say the least. I had originally
			planned to start inserting nodes and the relationships at the highest level leaf nodes working
			my way back down the tree. This ideally should have worked as there are no circular
			dependencies, however, I found this wasn’t the best approach.
		</p>

		<p>
			Introducing Cypher’s Unwind clause allowing a collection to be unwound into individual nodes
			where each be operated on in sequence. At the time of its discovery, I didn’t know this
			functionality would be my bread and butter as currently, I was taking the original approach
			already discussed. After testing, I found the asynchronous <code>Neo4j.Driver</code> was behaving
			unpredictable even when using the async/await pattern. For example, setting a breakpoint and manually
			stepping through execution would yield different results than otherwise. A key takeaway I have
			coined from this experience in my head is as follows:
		</p>

		<blockquote>
			<p>If the use of breakpoints alter execution results, it’s likely an asynchronous issue.</p>
			- Chase R.
		</blockquote>

		<p>
			Another issue I realized with this approach was, why am I using an asynchronous approach if
			everything needs to be done sequentially? I do not want to switch to a synchronous API as I
			still have to discuss my system architecture thoughts with an instructor at RIT. With a
			project of this size and complexity, I have no shame in asking for advice from those more
			experienced than I. Returning to the problem though, finding the cause of the inconsistency
			was proving challenging and I was wondering if a better solution existed.
		</p>

		<p>
			Introducing the <code>Neo4jClient</code> adding compile-time checks and an API that blends well
			with the C# landscape. This package vastly improved my developer experience through several key
			means illustrated below:
		</p>

		<p>
			Below is an example of me inserting multiple .csproj file contents or C# Projects into the
			neo4j instance using the <code>Neo4j.Driver</code> package.

			<img
				alt="Example usage of the Neo4j.Driver package."
				src="../../../neo4j.driver-example.png"
			/>
		</p>
		<p>Here are my pain points with the approach above:</p>
		<ol>
			<li>Manually managing a session (this should be optional in imho)</li>
			<li>Using <code>StringBuilder</code> to form queries.</li>
			<li>
				Using external code I found to serialize and deserialize objects to a dictionary that Neo4j
				can actually understand.
			</li>
			<li>No typing for returned result types.</li>
			<li>No real compile time checks.</li>
		</ol>
		<p>Now checkout the same query, but using the <code>Neo4jClient</code> instead below:</p>

		<div class="center-flex">
			<img alt="Example usage of the Neo4jClient package." src="../../../neo4jclient-example.png" />
		</div>

		<p>This is a thing of beauty as:</p>
		<ol>
			<li>No more manual session management.</li>
			<li>Minimal use of strings for querying.</li>
			<li>No external solutions needed beyond the package itself.</li>
			<li>Has typing for return types.</li>
			<li>Has compile time checks for return type usage.</li>
		</ol>

		<p>
			I think the most fascinating thing about this package is the use of the DLR (i.e., Dynamic
			Language Runtime) in the return clause.
		</p>

		<p>
			There is one issue though, I seem unable to use the <em>async/await</em> pattern as using it on
			any query or the connect driver method results in my applications termination without an exception
			or even console logging. This problem is evident via the code example below:
		</p>

		<h4>Approach #1 - <em>async/await</em></h4>
		<Gist gistUrl="https://gist.github.com/Chase-William/9d70f3457d178519043bfe876f92bb1c"/>

		<h4>Approach #2 - <em>sync</em></h4>
		<Gist gistUrl="https://gist.github.com/Chase-William/67ce9e68528d18a47afde3cb55303009"/>

		<p>
			The first approach doesn’t work, yet the second does, to clarify, the first approach is
			asynchronous, while the second is synchronous. I have not resolved this issue, but still
			proceeded with my learning/exploration so as to not get possibly and unnecessarily hung up.
			Therefore, The first image below is a screenshot of the entire cluster consisting of 1
			repository, 4 projects, 4 assemblies, and a plethora of types.
		</p>

		<h4>Graph Key</h4>
		<table style="max-width: 300px;">
			<tr>
				<th>Key: Color</th>
				<th>Value: Node</th>
			</tr>
			<tr>
				<td>Purple</td>
				<td>Repository</td>
			</tr>
			<tr>
				<td>Orange</td>
				<td>Project</td>
			</tr>
			<tr>
				<td>Blue</td>
				<td>Assembly</td>
			</tr>
			<tr>
				<td>Red</td>
				<td>Type</td>
			</tr>
		</table>

		<div class="center-flex">
			<img
				id="entire-cluster"
				alt="The entire graph cluster."
				src="../../../neo4j-v1-entire-cluster.png"
			/>
		</div>

		<p>I took this on my laptop so sorry about the low-ish resolution; checkout the image below.</p>

		<img alt="A large part of the graph cluster." src="../../../neo4j-v1-part-cluster.png" />

		<p>
			As you can see, the purple repository node connects to the root project (i.e., the project all
			others stem from) via a HAS relationship. The root project node has a chain of HAS
			relationships to other projects with each having their own PRODUCES relationship to their
			assembly node. Lastly, each assembly node has a HAS relationship with each type node it
			contains. This is more clearly shown in the screenshot below:
		</p>

		<p>
			The last screenshot shows I have selected a Type node so that its properties are shown in the
			right black box. I have commented out many of the Type node’s properties during testing to
			reduce insertion times.
		</p>

		<img
			alt="Shows many type nodes attached to a single assembly node, and the type node's properties."
			src="../../../neo4j-v1-type-properties.png"
		/>

		<p>
			This advancement has me excited as I started working on the original design back in June/July
			of 2022. This was before the pivot, and since then the idea has changed drastically, but for
			the better. The original idea came to me back in the beginning of the Spring semester of 2022
			so it’s basically been a year now since I began my efforts towards this project. To conclude,
			I have plenty of work ahead of me, but I do not fright as the quote below reads:
		</p>

		<blockquote>
			<p>
				The man who loves walking will walk further than the man who loves the destination. When you
				fall in love with the journey, everything else takes care of itself. Trip, fall, pick
				yourself up. Get up, learn, do it over again.
			</p>
			- Jonathan Byrd
		</blockquote>
	</article>
</Blog>

<style>
	#entire-cluster {
		max-width: 550px;
	}

	.center-flex {
		display: flex;
		justify-content: center;
	}
</style>

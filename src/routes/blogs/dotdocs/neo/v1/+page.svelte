<script>
	import Blog from '$lib/Blog.svelte';
	import WindowScrollProgress from '$lib/WindowScrollProgress.svelte';
</script>

<Blog
	title="Initial Graph Database Implementation"
	src="../../../../nodes.png"
	tags={[{ alt: 'Neo4j' }, { alt: 'C#' }, { alt: '.NET' } ]}
	alt=""
>
	<article>
		<h4>Storing C# Declaration Data in a Graph Database</h4>
		<h5>Version 1.0 - Part of The DotDocs Project</h5>

		<h4>Overall Mission Statement</h4>
		<p>
			To store all C# types from a library within a graph database (neo4j) so that the entire type
			system is navigable.
		</p>

		<h4>Mission Statement for Version 1.0</h4>
		<p>Insert three different assemblies into a single neo4j database instance.</p>

		<h4>Requirements (1.0)</h4>
		<ol>
			<li>Omit storage of entities marked with the compiler generated attributes.</li>
			<li>No duplication.</li>
			<li>
				No saving of type member information (i.e., types are only connected via their
				AssemblyNode).
			</li>
			<li>No saving of repository information.</li>
			<li>No worrying about version differences.</li>
			<li>
				Stick to the scope, no concerning myself about future ideas in the codebase, write them down
				on paper instead.
			</li>
		</ol>

		<h4>Nodes Required</h4>

		<table>
			<tr>
				<th>Name</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>AssemblyNode</td>
				<td>Represents an assembly that contains types.</td>
			</tr>
			<tr>
				<td>TypeNode</td>
				<td>Represents a type declared within an assembly.</td>
			</tr>
		</table>

		<h4>My Bare Bones Approach</h4>
		<p>
			Leveraging my existing DotDocs.Core solution I’ll be able download a repository, build it,
			read the build info, open a MetadataLoadContext, and therefore have access to all types
			defined in the assembly (reflection only context). From here, I can open/use the connection
			with the graph database server (neo4j) to see if the assembly and/or its types already exist,
			if not, I begin inserting.
		</p>

		<h4>Going Forward Questions</h4>
		<ol>
			<li>
				Will ref libraries be problematic since they only contain declaration details? If a project
				had a ref to a ref library and we attempted to add its information; would that addition be
				different compared to a non ref library?
			</li>
			<li>
				How can we handle later versions or earlier version of the same C# library being added to
				the database?
			</li>
			<ol>
				<li>
					If adding a later version of the same assembly, could we do a value based equality check
					on a type to determine if we can reference an existing node? What if multiple nodes from
					previous versions exist and qualify? Do we connect to all of them or just the latest?
					Should we do this if we are adding an earlier version too?
				</li>
				<li>
					With the idea of adding a node type for comments later, how would handle a situation where
					the type has remained unchanged in a new version, yet the comments have changed.
				</li>
			</ol>
		</ol>
	</article>
</Blog>

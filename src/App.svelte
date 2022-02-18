<script>
	//export let name;
</script>

<main>
	<div>
		<div id="selfie-container">
			<img src="chase.jpg" alt="Chase William Roth"/>
		</div>
		<p>
			Hello, I'm Chase 👋
			I'm a 4th year Web and Mobile Computing undergraduate at Rochester Institute of Technology.

   	</p>
	</div>
</main>

<style>
	div {
		width: 100%;
		display: flex;
	}

	#selfie-container {
		width: 30%;
		margin: auto 1em;
		border-radius: 12px;
		box-shadow: 5px 5px 5px #BBBD;
	}

	p {
		width: 60%;
		margin: auto;
		text-align: left;
	}

	img {
		width: 100%;
		margin: 0.3em;
		border-radius: 10px;
	}

	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
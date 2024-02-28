<script lang="ts">
	import Quiz from "./Quiz.svelte";
	import { score } from "./store";
</script>

<h1>Cinema</h1>

<div id="score">
	<p>SCORE = {$score}/10</p>
</div>

<Quiz />

<div id="container"></div>

<style>
	:global(body) {
		background: linear-gradient(
			to right,
			rgba(8, 1, 133, 0.458) 0%,
			rgba(9, 9, 121, 1) 0%,
			rgba(0, 212, 255, 1) 100%
		);
	}

	h1 {
		position: relative;
		left: 50px;
		width: 100px;
		font-family: "JetBrains Mono", monospace;
		font-weight: 300;
		color: white;
	}

	#score {
		background-color: white;
		width: 150px;
		height: 50px;
		border-radius: 10px;
		position: absolute;
		right: 50px;
		top: 30px;
	}

	#score > * {
		text-align: center;
		position: relative;
		font-family: "JetBrains Mono", monospace;
		font-weight: 300;
	}
</style>

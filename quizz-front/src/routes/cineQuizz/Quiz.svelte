<script lang="ts">
	import { quest } from "./cineInterface";
	import { score } from "./store";
	import { cineQuest } from "./store";

	export let n = 0;

	function shuffle<T>(array: T[]) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex > 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}

	enum AnswerStates {
		untouched,
		rightAnswered,
		badAnswered,
	}

	let state: AnswerStates = AnswerStates.untouched;

	function buttonAnswerClicked(userChoice: string) {
		if (state !== AnswerStates.untouched) {
			return;
		}
		if (isAnswerCorrect(userChoice)) {
			score.update((x) => x + 1);
			state = AnswerStates.rightAnswered;
		} else {
			state = AnswerStates.badAnswered;
		}
	}

	function isAnswerCorrect(answer: string) {
		return answer === quest[n].correctAnswer;
	}

	function nextQuestion() {
		if ($cineQuest < 10) {
			cineQuest.update((i) => i + 1);
			n++;
		}

		state = AnswerStates.untouched;
	}

	function prevQuestion() {
		if ($cineQuest > 1) {
			cineQuest.update((i) => i - 1);
			n--;
		}
		state = AnswerStates.untouched;
	}
</script>

<p id="question">{quest[n].question}</p>
<br />
<div class="answers">
	{#each shuffle(quest[n].answers) as answer}
		<button
			class:right-answer={state !== AnswerStates.untouched &&
				isAnswerCorrect(answer)}
			class:bad-answer={state === AnswerStates.badAnswered &&
				!isAnswerCorrect(answer)}
			on:click={() => buttonAnswerClicked(answer)}>{answer}</button
		>
	{/each}
</div>

<div id="arrow">
	<button id="prev" on:click={prevQuestion}>prev</button>
	<button id="next" on:click={nextQuestion}>next</button>
</div>

<style>
	:global(body) {
		background: linear-gradient(
			to right,
			rgba(8, 1, 133, 0.458) 0%,
			rgba(9, 9, 121, 1) 0%,
			rgba(0, 212, 255, 1) 100%
		);
	}

	.answers {
		margin-right: auto;
		margin-left: auto;
		text-align: center;
		position: relative;
		top: 100px;
		background-color: white;
		width: 700px;
		height: 300px;
		border-radius: 20px;
		-webkit-box-shadow:
			0px 10px 13px -7px #000000,
			5px 5px 15px 5px rgba(0, 0, 0, 0);
		box-shadow:
			0px 10px 13px -7px #000000,
			5px 5px 15px 5px rgba(0, 0, 0, 0);
	}

	.answers > * {
		position: relative;
		top: 100px;
		margin: 20px;

		align-items: center;
		appearance: none;
		background-color: #fcfcfd;
		border-radius: 4px;
		border-width: 0;
		box-shadow:
			rgba(45, 35, 66, 0.4) 0 2px 4px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		box-sizing: border-box;
		color: #36395a;
		cursor: pointer;
		display: inline-flex;
		font-family: "JetBrains Mono", monospace;
		height: 48px;
		justify-content: center;
		line-height: 1;
		list-style: none;
		overflow: hidden;
		padding-left: 16px;
		padding-right: 16px;
		position: relative;
		text-align: left;
		text-decoration: none;
		transition:
			box-shadow 0.15s,
			transform 0.15s;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		will-change: box-shadow, transform;
		font-size: 18px;
		margin: 20px;
	}

	.answers > *:focus {
		box-shadow:
			#d6d6e7 0 0 0 1.5px inset,
			rgba(45, 35, 66, 0.4) 0 2px 4px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
	}

	.answers > *:hover {
		box-shadow:
			rgba(45, 35, 66, 0.4) 0 4px 8px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		transform: translateY(-2px);
	}

	.answers > *:active {
		box-shadow: #d6d6e7 0 3px 7px inset;
		transform: translateY(2px);
	}

	.bad-answer {
		background-color: red;
	}

	.right-answer {
		background-color: green;
	}

	#arrow {
		position: relative;
		text-align: center;
		top: 150px;
	}

	#arrow > * {
		align-items: center;
		appearance: none;
		background-color: #fcfcfd;
		border-radius: 4px;
		border-width: 0;
		box-shadow:
			rgba(45, 35, 66, 0.4) 0 2px 4px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		box-sizing: border-box;
		color: #36395a;
		cursor: pointer;
		display: inline-flex;
		font-family: "JetBrains Mono", monospace;
		height: 48px;
		justify-content: center;
		line-height: 1;
		list-style: none;
		overflow: hidden;
		padding-left: 16px;
		padding-right: 16px;
		position: relative;
		text-align: left;
		text-decoration: none;
		transition:
			box-shadow 0.15s,
			transform 0.15s;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: nowrap;
		will-change: box-shadow, transform;
		font-size: 18px;
		margin: 20px;
	}

	#arrow > *:focus {
		box-shadow:
			#d6d6e7 0 0 0 1.5px inset,
			rgba(45, 35, 66, 0.4) 0 2px 4px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
	}

	#arrow > *:hover {
		box-shadow:
			rgba(45, 35, 66, 0.4) 0 4px 8px,
			rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
			#d6d6e7 0 -3px 0 inset;
		transform: translateY(-2px);
	}

	#arrow > *:active {
		box-shadow: #d6d6e7 0 3px 7px inset;
		transform: translateY(2px);
	}

	#question {
		text-align: center;
		position: relative;
		top: 100px;
		font-family: "JetBrains Mono", monospace;
		font-weight: 300;
		color: white;
	}

	h2 {
		position: relative;
		top: 100px;
		text-align: center;
		color: white;
		font-family: "JetBrains Mono", monospace;
		font-weight: 300;
	}
</style>

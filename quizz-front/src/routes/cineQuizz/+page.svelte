<script lang="ts">
    import ButtonScore from "./buttonScore.svelte";
    import ButtonHome from "./buttonScore.svelte";
    import { quest } from "./cineInterface";
    import { onMount } from "svelte";
    import { score } from "./store";
    import { cineQuest } from "./store";

    export let n = 0;

    //logique de jeu
    function logicGame(arr: any) {
        const index = Math.floor(Math.random() * arr.length);
        const element = arr[index];
        arr.splice(index, 1);

        return element;
    }

    onMount(() => {
        const button1 = document.getElementById("answ1") as HTMLButtonElement;
        const button2 = document.getElementById("answ2") as HTMLButtonElement;
        const next = document.getElementById('next') as HTMLButtonElement;
        const prev = document.getElementById('prev') as HTMLButtonElement;

        let hasAnsweredCorrectly = false;

        button1.addEventListener("click", () => {
            if (!hasAnsweredCorrectly && button1 && button1.textContent === quest[n].correctAnswer) {
                button1.style.backgroundColor = "green";
                score.update(x => x + 1);
                hasAnsweredCorrectly = true;
            } else {
                button1.style.backgroundColor = "red";
                button2.style.backgroundColor = "green"
            }
        });

        button2.addEventListener("click", () => {
            if (!hasAnsweredCorrectly && button2 && button2.textContent === quest[n].correctAnswer) {
                button2.style.backgroundColor = "green";
                score.update(x => x + 1);
                hasAnsweredCorrectly = true;
            } else {
                button2.style.backgroundColor = "red";
                button1.style.backgroundColor = "green"
            }
        });

        next.addEventListener('click', () => {

            if ($cineQuest < 10) {
                cineQuest.update(i => i + 1);
                n++;
            }
            button1.style.backgroundColor = '';
            button2.style.backgroundColor = '';

            hasAnsweredCorrectly = false;

        });

        prev.addEventListener('click', () => {

            if ($cineQuest > 1) {
                cineQuest.update(i => i - 1);
                n--;
            }

        });
    });
</script>

<h1>Cinema</h1>

<div id="score">
    <p>SCORE = {$score}/10</p>
</div>

<p id="question">{quest[n].question}</p>
<br />
<h2>{$cineQuest}</h2>
<br />
<div id="answers">
    <button id="answ1">{logicGame(quest[n].answers)}</button>
    <button id="answ2">{logicGame(quest[n].answers)}</button>
</div>

<div id="arrow">
    <button id="prev">prev</button>
    <button id="next">next</button>
    {#if $cineQuest >= 10}
    <ButtonScore/>
    {/if}
</div>

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

    #question {
        text-align: center;
        position: relative;
        top: 100px;
        font-family: "JetBrains Mono", monospace;
        font-weight: 300;
        color: white;
    }

    #answers {
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

    #answers > * {
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

    #answers > *:focus {
        box-shadow:
            #d6d6e7 0 0 0 1.5px inset,
            rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
    }

    #answers > *:hover {
        box-shadow:
            rgba(45, 35, 66, 0.4) 0 4px 8px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    #answers > *:active {
        box-shadow: #d6d6e7 0 3px 7px inset;
        transform: translateY(2px);
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

    h2 {
        position: relative;
        top: 100px;
        text-align: center;
        color: white;
        font-family: "JetBrains Mono", monospace;
        font-weight: 300;
    }
</style>

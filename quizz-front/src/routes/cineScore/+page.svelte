<script lang="ts">
    import { score } from "../cineQuizz/store";
    import { cineQuest } from "../cineQuizz/store";


    function home() {
        location.href = 'http://localhost:5173/home';
    }



</script>




<h1>Final Score</h1>

<!-- $ pour la valeur de l'objet -->
<h2>{$score}</h2>


<button id="viewHome" on:click={home}>Home</button>


<style>

    :global(body) {
        background: linear-gradient(
            to right,
            rgba(8, 1, 133, 0.458) 0%,
            rgba(9, 9, 121, 1) 0%,
            rgba(0, 212, 255, 1) 100%
        );
    }

    h1{
        text-align: center;
        color:aliceblue;
        font-family: "JetBrains Mono", monospace;
        font-weight: 300;
    }


    #viewHome{
        display: flex;
        justify-content: center;
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

    #viewHome:focus {
        box-shadow:
            #d6d6e7 0 0 0 1.5px inset,
            rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
    }

    #viewHome:hover {
        box-shadow:
            rgba(45, 35, 66, 0.4) 0 4px 8px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    #viewHome:active {
        box-shadow: #d6d6e7 0 3px 7px inset;
        transform: translateY(2px);
    }

    h2{
        text-align: center;
        color:aliceblue;
        font-family: "JetBrains Mono", monospace;
        font-weight: 300;
        position: relative;
        top: 300px;

    }




</style>
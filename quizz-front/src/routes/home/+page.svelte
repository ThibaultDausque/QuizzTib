<script lang="ts">

    //retourner à la page du quizz cinéma
    function cineQuizz() {
        location.href = 'http://localhost:5173/cineQuizz';
    };

    //retourner à la page des scores
    function score() {
        location.href = 'http://localhost:5173/score';
    }

</script>

<div id="header">
    <h1>QUIZZ</h1>
    <p>Welcome ... !</p>
    <input type="button" id="score" value="score" />
</div>

<div id="quizz">
    <input type="button" id="cinema" value="cinema" on:click={cineQuizz}/>
    <input type="button" id="videogame" value="video games" on:click={score}/>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

    :global(body) {
        background: linear-gradient(
            to right,
            rgba(8, 1, 133, 0.458) 0%,
            rgba(9, 9, 121, 1) 0%,
            rgba(0, 212, 255, 1) 100%
        );
    }

    #header {
        position: relative;
        left: 50px;
        width: 100px;
    }

    h1 {
        margin-left: auto;
        margin-right: auto;
        font-family: "JetBrains Mono", monospace;
        font-weight: 300;
    }

    #header > p {
        font-family: "JetBrains Mono", monospace;
        font-weight: 300;
        position: relative;
        top: 50px;
    }

    #header > * {
        color: white;
    }

    #quizz {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 100px;
        background-color: white;
        width: 500px;
        height: 300px;
        border-radius: 20px;
        -webkit-box-shadow:
            0px 10px 13px -7px #000000,
            5px 5px 15px 5px rgba(0, 0, 0, 0);
        box-shadow:
            0px 10px 13px -7px #000000,
            5px 5px 15px 5px rgba(0, 0, 0, 0);
    }

    #quizz > * {
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

    #quizz > *:focus {
        box-shadow:
            #d6d6e7 0 0 0 1.5px inset,
            rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
    }

    #quizz > *:hover {
        box-shadow:
            rgba(45, 35, 66, 0.4) 0 4px 8px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    #quizz > *:active {
        box-shadow: #d6d6e7 0 3px 7px inset;
        transform: translateY(2px);
    }

    #score {
        position: absolute;
        top: 40px;
        right: 30px;

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

    #score:focus {
        box-shadow:
            #d6d6e7 0 0 0 1.5px inset,
            rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
    }

    #score:hover {
        box-shadow:
            rgba(45, 35, 66, 0.4) 0 4px 8px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    #score:active {
        box-shadow: #d6d6e7 0 3px 7px inset;
        transform: translateY(2px);
    }
</style>

<script lang="ts">
    import { page } from "$app/stores";
    import Quiz from "./Quiz.svelte";
    import { score } from "./store";

    let showcontent = false;
    function finalScore() {
        return alert("YOUR SCORE =" + ' ' + $score);

        
    }
</script>


<button id="viewScore" on:click={finalScore}>Score</button>




<style>

    #viewScore{
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

    #viewScore:focus {
        box-shadow:
            #d6d6e7 0 0 0 1.5px inset,
            rgba(45, 35, 66, 0.4) 0 2px 4px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
    }

    #viewScore:hover {
        box-shadow:
            rgba(45, 35, 66, 0.4) 0 4px 8px,
            rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
            #d6d6e7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    #viewScore:active {
        box-shadow: #d6d6e7 0 3px 7px inset;
        transform: translateY(2px);
    }

    p{
        font-family: "JetBrains Mono", monospace;
		font-weight: 300;
    }


</style>
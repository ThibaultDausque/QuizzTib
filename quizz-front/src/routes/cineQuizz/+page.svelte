<script lang="ts">
    import { quest } from "./cineInterface";

    let i=1;
    let n=0;
    let x=0;


    function next() {
        if(i < 10){
            i++;
            n++
        }
    }

    function prev() {
        if(i > 1){
            i--;
            n--;
        }
    }

    // function score() {
    //     if(){

    //     }

    // }







</script>


<h1>Cinema</h1>

<div id="score">
    <p>SCORE = {x}</p>

</div>

<p id="question">{quest[n].question}</p>
<br>
<div id="answers">

    <button id="answ1">{quest[n].answers[0]}</button>
    <button id="answ2">{quest[n].correctAnswer}</button>
</div>

<div id="arrow">

    <button on:click={prev}>prev</button>
    <button on:click={next}>next</button>
    
</div>








<style>

    :global(body){
        background: linear-gradient(to right, rgba(8, 1, 133, 0.458) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
    }

    h1{
        position: relative;
        left: 50px;
        width: 100px;
        font-family: "JetBrains Mono",monospace;
        font-weight: 300;
        color: white;
    }

    #question{
       text-align: center;
       position: relative;
       top: 100px;
       font-family: "JetBrains Mono",monospace;
        font-weight: 300;
        color: white; 
    }

    #answers{
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        position: relative;
        top: 150px;
        background-color: white;
        width: 700px;
        height: 300px;
        border-radius: 20px;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    }

    #answers > *{
        position: relative;
        top: 100px;
        margin: 20px;

        align-items: center;
        appearance: none;
        background-color: #FCFCFD;
        border-radius: 4px;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono",monospace;
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
        transition: box-shadow .15s,transform .15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
        font-size: 18px;
        margin: 20px;
    }

    #answers > *:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;

    }

    #answers > *:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    #answers > *:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    
    }

    #arrow{
        position: relative;
        text-align: center;
        top: 200px;
    }

    #arrow > *{

        align-items: center;
        appearance: none;
        background-color: #FCFCFD;
        border-radius: 4px;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        font-family: "JetBrains Mono",monospace;
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
        transition: box-shadow .15s,transform .15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
        font-size: 18px;
        margin: 20px;

    }

    #arrow > *:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;

    }

    #arrow > *:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    #arrow > *:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    
    }

    #score{
        background-color: white;
        width: 150px;
        height: 50px;
        border-radius: 10px;
        position: absolute;
        right: 50px;
        top: 30px;
        
    }

    #score > *{
        text-align: center;
        position: relative;
        font-family: "JetBrains Mono",monospace;
        font-weight: 300;
        
    }



</style>
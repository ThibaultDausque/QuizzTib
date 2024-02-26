<script lang="ts">
    

    const postTest = () => {
        fetch("http://localhost:3000/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new String('Hello World !')), 
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("backend answer:", data);
            })
            .catch((error) => {
                console.error("POST request error:", error);
            })
    };

    postTest();

</script>





    <h1>login</h1>

    <div id="userlog">
        <input type="username" id="username" placeholder="username"/>
        <input type="password" id="password" placeholder="password"/>
        <a href="/home"><input type="button" id="submit" value="login"/></a>
    </div>




<style>
    
    :global(body){
        background: linear-gradient(to right, rgba(8, 1, 133, 0.458) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
    }

    #userlog{
        display: flex;
        flex-direction: column;
        width: 200px;
        position: relative;
        top: 150px;
        margin-left: auto;
        margin-right: auto;
        background-color: white;
        width: 300px;
        border-radius: 20px;
                -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    }

    #userlog > *{
        margin: 20px;
        margin-right: auto;
        margin-left: auto;
    }

    h1{
        color: white;
        font-family: "JetBrains Mono",monospace;
        display: flex;
        align-items: center;  
        justify-content: center;

    }

    #submit{
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

    #submit:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    #submit:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
    }

    #submit > *:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
    }



</style>


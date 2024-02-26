
    <h1>login</h1>

    <div id="userlog">
        <input type="username" id="username" placeholder="username"/>
        <input type="password" id="password" placeholder="password"/>
        <input type="button" id="submit" value="login"/>
    </div>




<style>
    :root(body){
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
    }

    #userlog{
        display: flex;
        flex-direction: column;
        width: 200px;
        position: relative;
        top: 150px;
        margin-left: auto;
        margin-right: auto;
    }

    #userlog > *{
        margin: 20px;
    }

    h1{
        display: flex;
        align-items: center;  /* for vertical alignment */
        justify-content: center;

    }

</style>


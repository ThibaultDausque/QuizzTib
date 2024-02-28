<h1>SCORE</h1>

<table class="score">
    <thead>
        <tr>
            <th>Cinema</th>
            <th>Video Games</th>
        </tr>
    </thead>
    <tr>
        <td>score 1</td>
        <td>score 2</td>
    </tr>
</table>


<style>
    h1{
        position: relative;
        left: 50px;
        width: 200px;
        font-family: "JetBrains Mono", monospace;
        font-weight: 300;
        color: white;
    }

    :global(body) {
        background: linear-gradient(
            to right,
            rgba(8, 1, 133, 0.458) 0%,
            rgba(9, 9, 121, 1) 0%,
            rgba(0, 212, 255, 1) 100%
        );
    }

    table.score {
        border: 3px solid white;
        text-align: left;
        border-collapse: collapse;
        width: 50%;
    }

    table.score th {
        color: white;
        font-family: "JetBrains Mono", monospace;
        font-weight: 300;
    }

    table{
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top: 200px;
    }


</style>
<?php

$score = $_GET["score"];

?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/619/619054.png">
    <title>2D-Rocket-Game</title>
</head>

<body onload="endPageLoad();">


    <div class="main3">

        <div class="scoreText"><?php echo $score ?></div>
        <img src="playAgainButton.png" class="restart" id="restart" onclick="reStart();" />

        <div class="footer">
            <p>Developed by Kaveesha Maduwantha</p>
            <p class="p2"><a href="https://initezz.com">Initezz Technologies</a></p>
        </div>

    </div>


    <script src="script.js "></script>
</body>

</html>
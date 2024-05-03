<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/619/619054.png">
    <title>2D-Rocket-Game</title>
</head>

<body onload="startGame();" onkeydown="rocketContrall(event);">


    <div class="main" id="background">

        <div class="on" id="on">


            <div class="scoreBoard">

                <div class="score" id="score">0</div>

            </div>

            <!-- <div class="birdBox1" id="birdBox1"></div> -->
            <!-- <div class="birdBox2" id="birdBox2"></div> -->
            <!-- <div class="birdBox3" id="birdBox3"></div> -->
            <img src="rocketIntroPic.gif" class="rocket" id="rocket" />

            <div class="footer">
                <p>Developed by Kaveesha Maduwantha</p>
                <p class="p2"><a href="https://initezz.com">Initezz Technologies</a></p>
            </div>


        </div>


        <div class="under">

            <img src="resources/arrow.png" class="arrowleft" id="leftArrow" onclick="leftArrowClick();" />
            <img src="resources/arrow.png" class="arrowRight" id="rightArrow" onclick="rightArrowClick();" />

        </div>


    </div>







    <script src="script.js "></script>
</body>

</html>
var rocketSound = new Audio("resources/RocketSound2.mp3");
var clickSound = new Audio("resources/MarkSound.mp3");
var bombSound = new Audio("resources/ExplosionSound.mp3");

function getClick() {
  var startGame = document.getElementById("startButton");

  if (startGame) {
    // alert("ok");
    setTimeout(k, 100);
    clickSound.play();
    rocketSound.play();
  }
}

function k() {
  window.location.href = "index2.php";
}

function startGame() {
  if (backgroundAnimationId == 0) {
    backgroundAnimationId = setInterval(moveBackground, 100);
    rocketSound.play();
  }
  if (rocketAnimationId == 0) {
    rocketAnimationId = setInterval(rocketFly, 100);
    rocketSound.play();
  }
  if (boxMoveId1 == 0) {
    boxMoveId1 = setInterval(moveBox1, 200);
  }
  if (boxMoveId2 == 0) {
    boxMoveId2 = setInterval(moveBox2, 200);
  }
  if (boxMoveId3 == 0) {
    boxMoveId3 = setInterval(moveBox3, 200);
  }

  rocketSound.play();
  rocketSound.loop = true;

  setInterval(createBox1);
  setInterval(createBox2);
  setInterval(createBox3);
}

var rocketMarginLeft = 0;
var rocketContrallId = 0;
var leftArrowClickId = 0;
var rightArrowClickId = 0;

function rocketContrall(event) {
  var keyCode = event.which;

  // left
  if (keyCode == 37) {
    var rocket = document.getElementById("rocket");
    rocketMarginLeft = rocketMarginLeft - 100;
    rocket.style.marginLeft = rocketMarginLeft + "px";

    clickSound.play();
    rocketSound.play();
    clickSound.currentTime = 0;

    if (rocketMarginLeft == -200) {
      // alert("මෙච්චරයි මේ දිශාවට");
      rocketMarginLeft = -100;
      clickSound.pause();
    }
  }

  // right
  if (keyCode == 39) {
    var rocket = document.getElementById("rocket");
    rocketMarginLeft = rocketMarginLeft + 100;
    rocket.style.marginLeft = rocketMarginLeft + "px";
    clickSound.play();
    clickSound.currentTime = 0;

    if (rocketMarginLeft == 200) {
      rocketMarginLeft = 100;
      rocketSound.play();
      clickSound.pause();
      // alert("මෙච්චරයි මේ දිශාවට");
    }
  }
}

function leftArrowClick() {
  var leftArrow = document.getElementById("leftArrow");
  var rocket = document.getElementById("rocket");
  rocketMarginLeft = rocketMarginLeft - 100;
  rocket.style.marginLeft = rocketMarginLeft + "px";
  clickSound.play();
  clickSound.currentTime = 0;

  if (leftArrow) {
    rocketSound.play();
    if (rocketMarginLeft == -200) {
      rocketMarginLeft = -100;
      // alert("මෙච්චරයි මේ දිශාවට");
    }
  }
}

function rightArrowClick() {
  var rightArrow = document.getElementById("rightArrow");
  var rocket = document.getElementById("rocket");

  rocketMarginLeft = rocketMarginLeft + 100;
  rocket.style.marginLeft = rocketMarginLeft + "px";
  clickSound.play();
  clickSound.currentTime = 0;

  if (rightArrow) {
    rocketSound.play();
    if (rocketMarginLeft == 200) {
      rocketMarginLeft = 100;
      // alert("මෙච්චරයි මේ දිශාවට");
    }
  }
}

var backgroundMarginTop = 0;
var backgroundAnimationId = 0;
var score = 0;

function moveBackground() {
  var x = document.getElementById("background");

  backgroundMarginTop = backgroundMarginTop + 15;
  x.style.backgroundPositionY = backgroundMarginTop + "px";

  score = score + 1;

  var smScore = document.getElementById("score");
  smScore.innerHTML = score;
}

var rocketImageNumber = 0;
var rocketAnimationId = 0;

function rocketFly() {
  var rocket = document.getElementById("rocket");
  rocketImageNumber = rocketImageNumber + 1;
  // rocket.src = "resources/Rocket " + rocketImageNumber + ".png";

  if (rocketImageNumber == 10) {
    rocketImageNumber = 0;
  }
}

// 1box

var boxMarginTop1 = 0;
var boxMoveId1 = 0;

function createBox1() {
  for (var i = 0; i < 10; i++) {
    var newBox = document.createElement("div");
    newBox.className = "birdBox1";
    newBox.id = "box1" + i;
    newBox.style.marginTop = boxMarginTop1 + "px";
    boxMarginTop1 = boxMarginTop1 - 800;
    document.getElementById("on").appendChild(newBox);
  }
}

function moveBox1() {
  for (var i = 0; i < 10; i++) {
    var box1 = document.getElementById("box1" + i);
    var currentMarginTop = getComputedStyle(box1).marginTop;
    var newMarginTop = parseInt(currentMarginTop) + 20;
    box1.style.marginTop = newMarginTop + "px";

    // alert(newMarginTop);

    if ((newMarginTop >= 340) & (newMarginTop <= 520)) {
      if (rocketMarginLeft < 0) {
        // alert("bomb");
        clearInterval(boxMoveId1);
        clearInterval(boxMoveId2);
        clearInterval(boxMoveId3);
        clearInterval(rocketAnimationId);
        clearInterval(backgroundAnimationId);

        bombAnimationId = setInterval(distroyed, 100);
        bombSound.play();
        rocketSound.pause();

        if (endPageId == 0) {
          endPageId = setTimeout(endPage, 2500);
        }
      }
    }
  }
}

// 2box

var boxMarginTop2 = -400;
var boxMoveId2 = 0;

function createBox2() {
  for (var i = 0; i < 10; i++) {
    var newBox2 = document.createElement("div");
    newBox2.className = "birdBox2";
    newBox2.id = "box2" + i;
    newBox2.style.marginTop = boxMarginTop2 + "px";
    boxMarginTop2 = boxMarginTop2 - 800;
    document.getElementById("on").appendChild(newBox2);
  }
}

function moveBox2() {
  for (var i = 0; i < 10; i++) {
    var box2 = document.getElementById("box2" + i);
    var currentMarginTop = getComputedStyle(box2).marginTop;
    var newMarginTop = parseInt(currentMarginTop) + 20;
    box2.style.marginTop = newMarginTop + "px";

    if ((newMarginTop >= 340) & (newMarginTop <= 520)) {
      if (rocketMarginLeft == 0) {
        // alert("bomb");
        clearInterval(boxMoveId1);
        clearInterval(boxMoveId2);
        clearInterval(boxMoveId3);
        clearInterval(rocketAnimationId);
        clearInterval(backgroundAnimationId);

        bombAnimationId = setInterval(distroyed, 100);
        bombSound.play();
        rocketSound.pause();

        if (endPageId == 0) {
          endPageId = setTimeout(endPage, 2500);
        }
      }
    }
  }
}

// 3box

var boxMarginTop3 = -800;
var boxMoveId3 = 0;

function createBox3() {
  for (var i = 0; i < 10; i++) {
    var newBox3 = document.createElement("div");
    newBox3.className = "birdBox3";
    newBox3.id = "box3" + i;
    newBox3.style.marginTop = boxMarginTop3 + "px";
    boxMarginTop3 = boxMarginTop3 - 1200;
    document.getElementById("on").appendChild(newBox3);
  }
}

function moveBox3() {
  for (var i = 0; i < 10; i++) {
    var box3 = document.getElementById("box3" + i);
    var currentMarginTop = getComputedStyle(box3).marginTop;
    var newMarginTop = parseInt(currentMarginTop) + 20;
    box3.style.marginTop = newMarginTop + "px";

    if ((newMarginTop >= 320) & (newMarginTop <= 540)) {
      if (rocketMarginLeft > 0) {
        // alert("bomb");

        clearInterval(boxMoveId1);
        clearInterval(boxMoveId2);
        clearInterval(boxMoveId3);
        clearInterval(rocketAnimationId);
        clearInterval(backgroundAnimationId);

        bombAnimationId = setInterval(distroyed, 100);
        bombSound.play();
        rocketSound.pause();

        if (endPageId == 0) {
          endPageId = setTimeout(endPage, 2500);
        }
      }
    }
  }
}

var bombImageNumber = 0;
var bombAnimationId = 0;

function distroyed() {
  var bomb = document.getElementById("rocket");
  bombImageNumber = bombImageNumber + 1;
  bomb.src = src = "resources/Bomb_(" + bombImageNumber + ").png";

  if (bombImageNumber == 24) {
    clearInterval(bombAnimationId);
    bombImageNumber = 23;
    rocketSound.pause();
  }
}

var endPageId = 0;

function endPage() {
  window.location.href = "index3.php?score=" + score;

  rocketSound.pause();
}

function endPageLoad() {
  var scoreText = document.getElementById("scoreText");
  scoreText.innerHTML = "159";
  rocketSound.pause();
  // alert(score);
}

function reStart() {
  var butn = document.getElementById("restart");

  if (butn) {
    clickSound.play();

    setTimeout(p, 100);
    rocketSound.play();
  }
}

function p() {
  window.location.href = "index2.php";
}

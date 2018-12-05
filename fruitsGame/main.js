var playing = false;
var score;
var trialsleft;
var fruits = ["apple", "banana", "cherries", "grapes", "mango", "orange", "peach", "pear", "watermelon"];
var step;
var action;

$( document ).ready(function() {
  //Click on start reset button
  $("#startreset").click(function(){
    //Check if we are playing?
      //yes
    if (playing == true) {
      //reload page
      location.reload();
    } else {
      //not playing
      playing = true; // game initiated
      // set score to zero
      score = 0;
      $("#scorevalue").html(score);
      //show trials trialsleft
      $("#trialsleft").show();
      trialsleft = 3;
      addHearts();
      // hide Game Over box
      $("#gameOver").hide();
      //change button text to reset game
      $("#startreset").html("Reset Game");
      //start sending fruits
      startAction();
    }
  });

$("#fruit1").mouseover(function(){
  score++;
  $("#scorevalue").html(score); // update score
  $("#slicesound")[0].play();  // plays the first sound from array
  // stop the fruit
  clearInterval(action);
  //hide fruit using animation
  $("#fruit1").hide("explode", 500); // Slicing the fruit
  // send new fruit with half second delay
  setTimeout(startAction, 500);
});

// FUNCTIONS

function addHearts(){
  $("#trialsleft").empty();
  for (var i = 0 ; i<trialsleft ;i++) {
    $("#trialsleft").append('<img src="images/LogoMakr_heart.png" class="life">')
  }
};

function startAction() {
  // generate a fruit
  $("#fruit1").show();
  chooseFruit();  // Choose a random fruit
  $("#fruit1").css({"left": Math.round(550*Math.random()), "top" : -50}); // random position
  // generate a random step
  step = 1 + Math.round(5*Math.random()); // change step
  // move fruit down by one step ever 10ms
  action = setInterval(function(){
    $("#fruit1").css({"top": $("#fruit1").position().top + step});  // droping fruits
    // check if the fruit is too low
    if ($("#fruit1").position().top > $("#fruitsContainer").height()) {
      // check if we have any trials left
      if(trialsleft > 1){
        // generate a fruit
        $("#fruit1").show();
        chooseFruit();  // Choose a random fruit
        $("#fruit1").css({"left": Math.round(550*Math.random()), "top" : -50}); // random position
        // generate a random step
        step = 1 + Math.round(5*Math.random()); // change step
        // reduce number of trials by one
        trialsleft-=1;
        // populate trials left box
        addHearts();
      } else {  // Game Over
        playing = false; // we are not playing anymore
        // change the text to start Game
        $("#startreset").html("Start Game");
        // show Game Over message
        $("#gameOver").show();
        $("#gameOver").html("<p>Game Over</p> <p>Your Score is: " + score + "</p>");
        $("#trialsleft").hide();
        stopAction();
      }
    }
  }, 10);
};

// Generate a random fruit:
function chooseFruit() {
  $("#fruit1").attr("src", "images/"+ fruits[Math.round(8*Math.random())] + ".png");
};

// stop dropping fruits
function stopAction () {
  clearInterval(action);
  $("#fruit1").hide();
};
// End of document ready function
});

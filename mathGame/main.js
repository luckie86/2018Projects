var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
// if we click on the start / reset button
document.getElementById("startreset").onclick = function () {
  // if we are playing
  if (playing === true) {
    location.reload(); //reload page
  } else {            // if we are not playing
    score = 0;       // set score to 0
    playing = true; // change mode to playing
    document.getElementById("scorevalue").innerHTML = score;
    //show countodown box
    show("timeremaining");
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    // hide Game Over box
    hide("gameOver");
    //change button to Reset
    document.getElementById("startreset").innerHTML = "Reset Game";
    // start countdown
    startCountDown();
    // Generate a new Q&A
    generateQA();
  }
};

for (i=1; i<5; i++) {
  // Clicking on an answer box
  document.getElementById("box"+i).onclick = function () {
    // if we are playing
    if (playing === true) {  // yes
      if (this.innerHTML == correctAnswer) {
        //correct answer
        //increase score by 1
        score++;
        document.getElementById("scorevalue").innerHTML = score;
        // hide wrong box and show correctAnswer
        hide("wrong");
        show("correct");
        setTimeout(function(){
          hide("correct");
        }, 1000);
        // Generate new Q&A
        generateQA();
      } else {
        // wrong answer
        hide("correct");
        show("wrong");
        setTimeout(function(){
          hide("wrong");
        }, 1000);
      }
    }
  };
}

// FUNCTIONS

// Start counter
function startCountDown() {
  action = setInterval(function(){
    timeremaining -= 1;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    if (timeremaining === 0) { // Game Over
      stopCountDown();
      show("gameOver");
      document.getElementById("gameOver").innerHTML ="<p> Game Over!</p> <p>Your score is " + score + ".</p>";
      hide("timeremaining");
      hide("correct");
      hide("wrong");
      playing = false;
      document.getElementById("startreset").innerHTML
    }
  }, 1000)
};

// Stop counter
function stopCountDown() {
  clearInterval(action);
};

// hide element
function hide (id) {
  document.getElementById(id).style.display = "none";
};
// show element
function show (id) {
  document.getElementById(id).style.display = "block";
};

// Generate new Q&A
function generateQA() {
  var x = 1 + Math.round(9 * Math.random());
  var y = 1 + Math.round(9 * Math.random());
  correctAnswer = x * y;
  document.getElementById("question").innerHTML = x + "X" + y;
  var correctPosition = 1 + Math.round(3 * Math.random());
  document.getElementById("box"+correctPosition);
  // Fill one box with the correct answer
  document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
  // fill other boxes with wrong answers
  var answers = [correctAnswer];
  for (i=1; i<5; i++) {
    if(i !== correctPosition) {
      // Genereate wrong answer
      do {
        var wrongAnswer;
        wrongAnswer = (1 + Math.round(9 * Math.random()))*(1 + Math.round(9 * Math.random()));
      } while (answers.indexOf(wrongAnswer)>-1) {
        document.getElementById("box"+i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
      }
    }
  }
};

var timerEl = document.getElementById("timer");
//removed buttons becuase it was easier to work with li's
/*var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");*/
var landText = document.getElementById("landingText");
var showQuestons = document.getElementById("showQuestons");
var startQuizBtn = document.getElementById("startQuizBtn");
var submitBtn = document.getElementById("submitBtn");
var submitScoreEl = document.getElementById("submitScore");
var userScoreEl = document.getElementById("userScore");
var userNameInput;
var questionHeader = document.getElementById("question1");
var answerChoices = document.getElementById("answers");
var secondsLeft = 60;
var answer;

startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
  // swap welcome msg w/ questions
  landText.classList.add("d-none");

  showQuestons.classList.remove("d-none");

  // timer set and begins 60s
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time:" + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      setTimeout(displayScore, 500);

      //sendMessage(); $$add some function here that will move to table page with store high score values
    }
  }, 1000);
}
//setTime();

// too shuffle li array, to over write after onClick happens

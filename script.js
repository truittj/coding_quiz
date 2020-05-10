var timerEl = document.getElementById("timer");
//removed buttons becuase it was easier to work with li's
/*var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");*/
var landText = document.getElementById("landingText");
var showQuestons = document.getElementById("quiz");
var startQuizBtn = document.getElementById("startQuizBtn");
var submitBtn = document.getElementById("submitBtn");
var submitScoreEl = document.getElementById("submitScore");
var userScoreEl = document.getElementById("userScore");
var userNameInput;
var questionHeader = document.getElementById("titleQuestion");
var answerChoices = document.getElementById("answers");
var questionNumber = -1;
var secondsLeft = 60 + 1;
var answer;

function startQuiz() {
  // swap welcome msg w/ questions
  landText.classList.add("d-none");

  showQuestons.classList.remove("d-none");

  // timer set and begins 90s countdown
  setTime();
  // create questions to display
  makeQuestions();
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

// too shuffle btn array, to over write after onClick happens

function makeQuestions() {
  questionNumber++;
  answer = questions[questionNumber].answer;

  questionHeader.textContent = questions[questionNumber].title;
  answerChoices.innerHTML = "";

  var choices = questions[questionNumber].choices;

  for (var i = 0; i < choices.length; i++) {
    var nextChoice = document.createElement("button");

    nextChoice.textContent = choices[i];
    answerBtn = answerChoices
      .appendChild(nextChoice)
      .setAttribute("class", "btn btn-primary btn-block");
  }
}

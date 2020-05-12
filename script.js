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

  // timer set and begins 60 countdown
  setTime();
  // create questions to display
  makeQuestions();
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time:" + secondsLeft;

    if (secondsLeft === 0 || questionNumber === questions.length) {
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
// display user name to scoreboard
function displayScore() {
  document.getElementById("quiz").classList.add("d-none");
  document.getElementById("submitScore").classList.remove("d-none");
  userScoreEl.textContent = "Your final score is " + secondsLeft + ".";
}

// Event Listeners for Main Buttons
startQuizBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  addScore();

  window.location.href = "./highscores.html";
});

function addScore() {
  userNameInput = document.getElementById("userName").value;

  // create a new object with name and score keys
  var newScore = {
    name: userNameInput,
    score: secondsLeft,
  };
  // check if there are scores in local storage first(get it)
  //if not, make a new/blank array
  var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
  // push object into score array
  highScores.push(newScore);
  // turn objects into an array of strings then put it into local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function hideFeedback() {
  var pEl = document.getElementsByClassName("accuracy")[0];
  pEl.style.display = "none";
}

function showFeedback() {
  var pEl = document.getElementsByClassName("accuracy")[0];
  pEl.removeAttribute("style");
}

answerChoices.addEventListener("click", function (event) {
  var pEl = document.getElementsByClassName("accuracy")[0];

  // evaluation of user's answer choices & feedback
  if (answer === event.target.textContent) {
    pEl.innerHTML = "Correct!";
    setTimeout(hideFeedback, 1000);
    showFeedback();
  } else {
    pEl.innerHTML = "Sorry, that's incorrect.";
    setTimeout(hideFeedback, 1000);
    secondsLeft = secondsLeft - 10;
    showFeedback();
  }
  makeQuestions();
});

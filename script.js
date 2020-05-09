console.log();
var timerEl = document.getElementById("timer");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time:" + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //sendMessage();
    }
  }, 1000);
}
setTime();

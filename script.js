var timerEl = document.getElementById("timer");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time:" + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //sendMessage(); $$add some function here that will move to table page with store high score values
    }
  }, 1000);
}
//setTime();
btnArray = [btn1, btn2, btn3, btn4];
var btnRandom = btnArray[Math.floor(Math.random() * btnArray.length)];
console.log(btnRandom);
console.log(btnArray);

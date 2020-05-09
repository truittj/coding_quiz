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

// too shuffle btn array, to over write after onClick happens

btnArray = [btn1, btn2, btn3, btn4];
var qOne = [];
var qTwo = [];
var qThree = [];

//var btnRandom = btnArray[Math.floor(Math.random() * btnArray.length)];
//console.log(btnRandom);
//console.log(btnArray);

//Function to get all btns to shuffle into a new array

var quizAnswerDisplayRandomized = function (array) {
  var counter = array.length;
  var temp;
  var index;

  // while loop
  while (counter > 0) {
    // pick a random index
    index = Math.floor(Math.random() * counter);

    // decrease the counter by 1
    counter--;

    // swap the last element
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  console.log(array);
  arrangeBtnOrder(array);
};

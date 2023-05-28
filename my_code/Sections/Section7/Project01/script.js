"use strict";

/*CONTENIDO INTRODUCTORIO
//get the value of the element using the class
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.guess').value);
 
//set a value of an element
console.log(document.querySelector('.message').textContent = 'Correct Number!');
console.log(document.querySelector('.guess').value = 23);
*/

//Value of the score and highscore
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

//Random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//event listener - CHECK BTN
//addEventListener(type, function)
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log("Guess " + guess);

  //Cases to compare the input with the secret number defined
  //No input
  if (!guess) {
    displayMessage("⛔️ No number!");
    //win! the input number == to the number defined
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    //change the color of the screen when the user win!
    document.querySelector("body").style.backgroundColor = "#60b347";
    //change the size of the box container the number when the user win!
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Compare if the input number is greater or less than the number defined
  } else if (guess !== secretNumber) {
    //greater
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
  1. Select the element with the 'again' class and attach a click eventhandler 
  2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
  3. Restore the initial conditions of the message, number,score and guess input fields
  4. Also restore the original backgroundcolor(#222) and number width (15rem)
*/

//event listener - AGAIN BTN - restoring the values
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222"; //"#222";
  document.querySelector(".number").style.width = "15rem";
});

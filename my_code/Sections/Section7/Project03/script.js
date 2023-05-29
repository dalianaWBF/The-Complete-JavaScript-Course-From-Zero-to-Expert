'use strict';

//Selecting elements by ID
const score0_element = document.getElementById('score--0');
const score1_element = document.getElementById('score--1');
const current_element_player1 = document.getElementById('current--0');
const current_element_player2 = document.getElementById('current--1');

//Selecting elements by CLASS
const dice_element = document.querySelector('.dice');
const player1_element = document.querySelector('.player--0');
const player2_element = document.querySelector('.player--1');
const rollDice_element = document.querySelector('.btn--roll');
const hold_element = document.querySelector('.btn--hold');
const newGame_element = document.querySelector('.btn--new');

let rollDiceRandomNumber;
let currentSum = 0;

//set values to the variables
score0_element.textContent = 0;
score1_element.textContent = 0;

//other variables:
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

//Hide the dice
dice_element.classList.add('hidden');

//Hacer que cuando se presione el botón de Roll dice aparezca un dado de
//forma aleatoria

const switchPlayer = function () {
  //roll player
  currentSum = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentSum;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Toggle: Verifica si la clase existe, si no existe la crea y si existe la elimina:
  player1_element.classList.toggle('player--active');
  player2_element.classList.toggle('player--active');
};

const rollDiceFunction = function () {
  if (playing) {
    //create a random number for the dice
    rollDiceRandomNumber = Math.trunc(Math.random() * 6 + 1);

    dice_element.src = `dice-${rollDiceRandomNumber}.png`;
    dice_element.classList.remove('hidden');

    if (rollDiceRandomNumber !== 1) {
      //calculate the current value
      currentSum += rollDiceRandomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentSum;
    } else {
      switchPlayer();
    }
  }
};

rollDice_element.addEventListener('click', rollDiceFunction);

hold_element.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentSum;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //Check if the player's score is >= 100
    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      dice_element.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer(); //switch player
    }
  }
});

//CHALLENGE - Implement the New Game btn funcionality
newGame_element.addEventListener('click', function () {
  currentSum = 0;
  dice_element.classList.add('hidden');
  document.getElementById(`current--${activePlayer}`).textContent = currentSum;
  scores[activePlayer] = 0;

  document.getElementById(`score--0`).textContent = currentSum;
  document.getElementById(`score--1`).textContent = currentSum;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  playing = true;
});

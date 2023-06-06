// Coding Challenge #2
/*
Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:
  1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
  2. Use a loop to calculate the average odd and log it to the console (Wealready studied how to calculate averages, you can go check if you don't remember)
  3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33 
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5

  Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}
*/
'use strict';

let contador = 0;

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2039",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...scored) {
    for (let i=0; i<scored.length; i++){
      console.log(`Goal ${i+1}: `, scored[i]);
    }
  },
};


//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const score of game.scored) {
//   console.log(score);
// }
console.log('Player name and goals: ');
console.log(game.printGoals(...game.scored));

//  2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let average, sum = 0;
const oddsValues = Object.values(game.odds);

for (const value of oddsValues){
  sum += value;
  average = sum / oddsValues.length;
}
console.log('Average: ', average.toFixed(2));

//3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
/*
    Odd of victory Bayern Munich: 1.33 
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
*/

for (let i=0; i<oddsValues.length; i++){
  if(i===0){
    console.log(`Odd of victory`, game.team1, `:` ,oddsValues[i]);
  }else if(i=== (oddsValues.length - 1)){
    console.log(`Odd of victory`, game.team2, `:` , oddsValues[i]);
  }else{
    console.log(`Odd of draw`, oddsValues[i]);
  }
}



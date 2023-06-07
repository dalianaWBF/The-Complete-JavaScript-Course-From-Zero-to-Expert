'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order (starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery ({startedIndex = 1, mainIndex = 0, time = '20:00', address}) {
    // console.log(`Order received! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta (ingrediente1, ingrediente2, ingrediente3) {
    // console.log(`Here is your delicious pasta with ${ingrediente1}, ${ingrediente2}, and ${ingrediente3}`);
  },

  orderPizza (mainIngredient, ...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};      

restaurant.orderDelivery ({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  startedIndex: 2,
});

//Maps iterator
//populate a new map
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],  
  [2, 'Java'],  
  [3, 'Javascript'],  
  ['correct', 3],  
  [true, 'Correct 🎉'],  
  [false, 'Try again!'], 
]);

console.log(question);

//Convert objects to map:
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours)); 
console.log(hoursMap);

for(const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3;
//Number (prompt('Your answer'));
console.log(answer);

//trabajar con los valores booleanos del map
console.log(question.get(question.get('correct') === answer));


//convert a map back to an array
console.log('Convert a map back to an array', ...question);

//methods
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


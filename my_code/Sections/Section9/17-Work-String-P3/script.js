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


//Work with strings - P3:

//Splite: devide an string based on a divider string and create an array with the result
console.log('a+very+nice+string'.split('+')); //['a', 'very', 'nice', 'string']
console.log('Daliana Zambrano'.split(' ')); //['Daliana', 'Zambrano']

const [firstName, lastName] = 'Daliana Zambrano'.split(' ');
console.log(firstName, lastName); 

///Join method is the opposite of the split method
const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Mrs. Daliana Zambrano


//poner en mayúscula la primera letra de cada palabra
let passenger = 'jessica ann swith davis';
console.log(passenger);

const capitalizeName = function (name) {
  const arrName = name.split(' ');
  let newNames = [];
  console.log(arrName);

  for (const namePart of arrName){
    //newNames.push(namePart[0].toUpperCase() + namePart.slice(1)); //una forma
    newNames.push(namePart.replace(namePart[0], namePart[0].toUpperCase()));
  }
  passenger = newNames.join(' ');
  console.log(passenger);
  console.log(newNames.join(' '));
}

capitalizeName(passenger);


//Padding a string: add a number of characters to get a wanted number of the string length
const message = 'Go to the gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '-')); //+++++++Go to the gate 23!----------
console.log('Daliana'.padEnd(25, '+')); //Daliana++++++++++++++++++

//Example
//Esconder parte del número de una tarjeta de crédito
const maskCreditCard =  function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(last);
  return last.padStart(str.length, '*'); //****5678

}

console.log(maskCreditCard(12345678));
console.log(maskCreditCard('7483913373019874438'));

//Repeat 
const message2 = 'Bad weather ... All departures Delayed ... ';
console.log(message2.repeat(5));

//Example
const planesInLine = function (n){
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
}

planesInLine(4); //There are 4 planes in line 🛩️🛩️🛩️🛩️
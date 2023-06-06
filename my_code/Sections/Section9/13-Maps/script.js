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

//Data Structure : Maps
//Map values to keys
//keys can be of any types, in object the keys are basically strings

const rest = new Map(); //empty map

//fill out the 'rest' variable:
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');


//fill out the 'rest' variable - way 2:
rest
.set ('categories', ["Italian", "Pizzeria", "Vegetarian", "Organic"])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed');


console.log(rest); //devueleve todas los key-values que hemos ido agregando

//Imprimir un valor específico
console.log(rest.get('name')); //Classico Italiano
console.log(rest.get(true)); //'We are open'

//example:
const time = 21;
console.log(rest.get(time > rest.get ('open') && time < rest.get ('close')));

//verificar si un elemento existe
console.log(rest.has('categories'));

//borrar
rest.delete(2);
 
//borrar todos los elementos
//rest.clear();
//console.log(rest);


//example
rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); //it doesn't work because they don't have the same place in memory


//fix the previous example
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading'); //it doesn't work for me //key: h1, value: "Heading"
console.log(rest.get(arr)); 

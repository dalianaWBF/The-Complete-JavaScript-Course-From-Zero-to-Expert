'use strict';

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
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
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  orderDelivery: function ({startedIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ingrediente1, ingrediente2, ingrediente3) {
    console.log(`Here is your delicious pasta with ${ingrediente1}, ${ingrediente2}, and ${ingrediente3}`);
  }
};

restaurant.orderDelivery ({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  startedIndex: 2,
});

//como no le pasamos todos los valores, toma los de por defecto que declaramos en la función
restaurant.orderDelivery ({
  address: 'Via del Sole, 21',
  startedIndex: 2,
});

const arr = [7, 8, 9];
//the spread operator took each value or the arr and write them individualy in the new array
const goodArray = [1, 2, ...arr]; //[1, 2, 7, 8, 9]
console.log(goodArray);
console.log(...goodArray); //1, 2, 7, 8, 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //['Pizza', 'Pasta', 'Risotto', 'Gnocci']


//copy array 
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more
const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(wholeMenu);

//el spread operator no crea nuevas variables por tanto solo se puede usar en lugares donde hayan valores separados por comas (Iterables: arrays, strings, maps, sets but NOT objects)
const str = 'Jonas';
const letters = [...str, ' ' , 'S.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...str);// J o n a s


// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);

//restaurant.orderPasta(...ingredients);


//Object
const newRestaurant = {fpundedIn: 1990, ...restaurant, founder: 'Daliana'};
console.log(newRestaurant);


const restaurantCopy = {...restaurant};
restaurantCopy.name = "New name";
console.log(restaurant.name);
console.log(restaurantCopy.name);

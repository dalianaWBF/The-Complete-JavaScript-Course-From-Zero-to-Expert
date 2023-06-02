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
    // console.log(`Order received! ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ingrediente1, ingrediente2, ingrediente3) {
    // console.log(`Here is your delicious pasta with ${ingrediente1}, ${ingrediente2}, and ${ingrediente3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredient){
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

//Use ANY data type, return ANY data type
//Short-circuting (if the first value is true it's going to return the first value )
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); // true
console.log(undefined || null); // null


restaurant.numGuessts = 0;
const guests1 = restaurant.numGuessts ? restaurant.numGuessts : 10;
console.log(guests1);

const guests2 =  restaurant.numGuessts || 10;
console.log(guests2);


//AND OEPRATOR
console.log('-------AND-------');
console.log(0 && 'Jonas');
console.log(8 && 'Jonas');

//Practical example:
//is the same of a if statment:  
restaurant.orderPizza && restaurant.orderPizza ('cheese', 'tomato');

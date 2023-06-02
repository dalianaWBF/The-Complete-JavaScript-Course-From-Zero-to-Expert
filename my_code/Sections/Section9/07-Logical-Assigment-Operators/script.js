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


///
const restaurant1 = {
  name: 'Capri',
  numGuests: 0, 
}

const restaurant2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
}

// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;

// console.log(restaurant1);
// console.log(restaurant2);

//Logical Assigment Operator
// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;

//Nullish Assigment Operator
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

console.log(restaurant1); //10
console.log(restaurant2); //10

//what happened here is: 
//restaurant2.owner = true? which means that exist a value for it ---- if that is true so it's going to be replace by ANONYMOUS
//restaurant2.owner = restaurant2.owner && '<ANONYMOUS>'

//Other way to do it
restaurant1.owner &&= '<ANONYMOUS>';
restaurant2.owner &&= '<ANONYMOUS>';


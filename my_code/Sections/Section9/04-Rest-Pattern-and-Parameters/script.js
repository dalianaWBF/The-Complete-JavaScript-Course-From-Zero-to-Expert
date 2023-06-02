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

//PACK ELEMENTS IN ARRAY
 const arr = [1, 2, ...[3, 4]]; //spread operator
 console.log(arr); //[1, 2, 3, 4]

 const [a, b, ...others] = [1, 2, 3, 4, 5, 6]; //rest operator
 console.log(a, b, others); // 1, 2, [3, 4, 5, 6]

 //the rest element MUST be the last elemenent
 const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

 console.log(pizza, risotto, otherFood);


 //Objects
 const {sat, ...weekdays} = restaurant.openingHours;
 console.log(weekdays); // fri: {open: 11, close: 23}
                        // thu: {open: 12, close: 22}


//FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for(let i=0; i<numbers.length; i++) sum +=numbers[i];
  console.log(sum);
};

add(2, 3);
add(3, 4, 5, 7, 9);
add(9, 5, 6, 7, 8, 9, 3);


restaurant.orderPizza('mushrooms', 'onion', 'olives');
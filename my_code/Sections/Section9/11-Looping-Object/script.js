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


//Looping objects: Object keys(property names), values and entries

//Looping objects by Object keys(property names):
const properties = Object.keys(openingHours);
console.log('Properties name', properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of properties){
  openStr += `${day}, `;
}
console.log(openStr);


//Looping objects by Object values:
const values = Object.values(openingHours);
console.log('Values', values);

////Looping objects by Object entries:
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

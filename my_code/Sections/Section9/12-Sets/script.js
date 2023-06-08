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

//Data Structure : Sets
//Collection of unique values, not duplicate allow
//the order of the element is irrelevant
//it's iterable

const orderSet = new Set([
  'Pasta', 
  'Pizza', 
  'Risotto', 
  'Pizza', 
  'Pasta', 
  'Pizza', 
]);

console.log('typeof', typeof orderSet);

//All the duplicate are gone
console.log(orderSet); //'Pasta', 'Pizza', 'Risotto'
console.log(orderSet.size); //3
console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('Bread')); //false

//add a value to the set
orderSet.add('Garlic Bread');
console.log(orderSet); //'Pasta', 'Pizza', 'Risotto', 'Garlic Bread'

//delete a value
orderSet.delete('Risotto');

//delete all the element of the set
//orderSet.clear();

//Iterable example:
for(const order of orderSet) console.log(order);

//Real use example:
//Delete the duplicates of an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = new Set(staff); //inmutable
console.log(staffUnique); // 'Waiter', 'Chef', 'Manager'

//create a new array with unique values
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);

//size
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); //3



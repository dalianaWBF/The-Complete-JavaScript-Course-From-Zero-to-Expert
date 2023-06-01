'use strict';

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};


const arr = [2, 3, 4];
const [x, y, z] = arr; //this 
//is the same as this:
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Working with restaurant:
const [first, second] = restaurant.categories; //"Italian", "Pizzeria"
const [first1, ,thirth] = restaurant.categories; //"Italian", "Vegetarian"

let [main, ,secondary] = restaurant.categories; //"Italian", "Vegetarian"

//Switching variables:  
//This
[main, secondary] = [secondary, main]; // "Vegetarian", "Italian"

//Is the same as this:
const temp = main;
main = secondary;
secondary = temp;

//Received 2 return values from a function
const [starter, mainC] = restaurant.order(2, 0);
console.log(starter, mainC);


//Array inside of another array -  nested destructuring
const nested = [2, 3, [5, 6]];
const [i, ,j] = nested;
console.log(i, j);

const [l, ,[m, n]] = nested;
console.log(l, m, n);

//Default values
const [r=1, s=1, t=1] = [8, 9]; //8, 9, undifined
console.log(r, s, t);


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

//el nombre de la varible debe ser igual a la característica del objeto 
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories); 

//en este caso definimos un nombre a la variable
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);      

//Default variables
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);    


//MUTATING VARIABLES
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};       
({a, b} = obj);
console.log (a, b);


//Nested objects
const {fri} = openingHours;
console.log (fri); // {open: 11, close: 23}

//llamar a propiedades del objeto openingHours 
const {sat: {open, close}, } = openingHours; // 0, 24
console.log (open, close);
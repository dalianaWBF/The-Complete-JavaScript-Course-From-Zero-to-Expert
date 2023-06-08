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


//Work with strings - P1:
const airplane = 'TAP Air Portugal';
const plane = 'A320';

console.log('B537'[0]); //B

//Methods:
//indexOf: get the position of an exact element
console.log(airplane.indexOf('r')); //the first ocurrence
console.log(airplane.lastIndexOf('r')); //the last ocurrence
console.log(airplane.indexOf('Portugal')); //case sensitive //get the position of the element //8
console.log(airplane.slice(4));//extract part of the string (sub-string) //Air Portugal
console.log(airplane.slice(4, 7)); //extract the string from the position 4 to 7 (sub-string) //Air 

//Extract the first word without know the index
console.log(airplane.slice(0, airplane.indexOf(' '))); //recorre desde la posicion 0 hasta que encuentre el primer espacio en blanco //TAP

console.log(airplane.slice(airplane.lastIndexOf(' ') + 1)); //extrae el string cuando encuentre el último espacio en blanco (el + 1) es pa que el espacio en blanco no se imprima //Portugal

console.log(airplane.slice(-2));//empieza de atrás hacia adelante //al
console.log(airplane.slice(1, -1)); // AP Air Portuga

//function example:
const checkMiddleSet = function (seat) {
  //B and E are the middle seats
  const seatLetter = seat.slice(-1);
  if(seatLetter === 'B' || seatLetter === 'E'){
    console.log('You got the middle seat 🫣');
  }else{
    console.log('You got lucky!!!');
  }
}

checkMiddleSet('11B');
checkMiddleSet('23C');
checkMiddleSet('4A');
checkMiddleSet('3E');


//NOTA:
/*
Los strings son variables primitivas y no tienen métodos asociados, pero se pueden llamar métodos como el slice porque JS convierte el string en un objeto de string y cuando termina de ejecutar el método vuele a convertir la variable en un string 

console.log(new String ('jonas));
*/


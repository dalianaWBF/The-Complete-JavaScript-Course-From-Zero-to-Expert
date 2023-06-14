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


//Work with strings - P2:
const airplane = 'TAP Air Portugal';

console.log(airplane.toLowerCase()); //Minùsculas
console.log(airplane.toUpperCase()); //Mayúsculas

//Fix capatilization in name
const passenger = 'dAliAnA';
const passengerLowerC = passenger.toLowerCase(); //daliana
const passengerCorrectName = 
  passengerLowerC[0].toUpperCase() + passengerLowerC.slice(1); 
console.log(passengerCorrectName); //Daliana


//function to compare emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmails = loginEmail.toLowerCase();
console.log(lowerEmails); //' hello@jonas.io'
const trimedEmail = lowerEmails.trim();
console.log(trimedEmail); //'hello@jonas.io'

const normalizedEmail = loginEmail.toLowerCase().trim(); //es una forma más reducida de hacer lo mismo que arriba
console.log(normalizedEmail); //'hello@jonas.io'


//Challenge
function compareEmails (email1, email2) {
  const normalizedEmail1 = email1.toLowerCase().trim();
  const normalizedEmail2 = email2.toLowerCase().trim();

  normalizedEmail1 === normalizedEmail2 ? console.log(true) : console.log(false);
};

compareEmails('hello@jonas.io', ' Hello@Jonas.Io \n'); //true
compareEmails('hello@jonas.io', ' Helo@Jonas.Io \n'); //false


//Replace part of a string
const priceGB = '288,930£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS);

const announcment = 'All passenger come to the baording door 23. Boarding door 23!';
console.log(announcment.replace('door', 'gate')); //case sentitive
console.log(announcment.replaceAll('door', 'gate')); 

//Expresiones regulares:
console.log(announcment.replace(/door/g, 'gate')); 

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); //verificar si incluye ese string //true
console.log(plane.includes('Boeing')); //false
console.log(plane.startsWith('A3')); //verificar si el string empieza con esa letra

if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New Airbus family!');
}


//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if(baggage .includes('knife') || baggage.includes('gun')){
    console.log("You are NOT allowed on board");
  }else {
    console.log("Welcome aboard");
  }

}

checkBaggage('I have a laptop, some Foof and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');



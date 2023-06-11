"use strict";

//BIND Method

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book(flifhtNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flifhtNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flifhtNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  booking: [],
};

//BIND METHOD
//Allow us to manualy set the this keyword for any function call

//The bind method no call the function inmediately, instead it returns a new funtion where the new keyword is bound, which means that it set the this keyword with whereever value we pass into bind
const book = lufthansa.book;
const bookEW = book.bind(eurowings); //create a function per each airline
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams"); //call the funtion with the parameters

const bookEW23 = book.bind(eurowings, 23); //define always for flight 23
bookEW23("Jonas Roberts");

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial application (pre-set parameters)
const addTax = (rate, value) => value + value * rate;
//console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //define the rate
//El null se refiere al objeto (this) (en este caso la función no lleva ninguno)
//El orden de los valores importa porque por ejemplo el 0.23 se refiere específicamente al rate, si se pone en otro order el resultado cambia

console.log(addVAT(100));
console.log(addVAT(23));

//Challenge:
//Crear una función que retorne otra función que calcule el addTax
const funcionChallenge = function (rate) {
  return function (value) {
    console.log(`${value + value * rate}`);
  };
};

funcionChallenge(0.1)(800);
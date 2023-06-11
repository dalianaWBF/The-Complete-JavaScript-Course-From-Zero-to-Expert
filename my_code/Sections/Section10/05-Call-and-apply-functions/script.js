"use strict";

//Aerolínea 1
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.booking.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Daliana Zambrano');
lufthansa.book(790, 'Dayana Zambrano');
console.log(lufthansa);

//Aerolínea 2
const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],
};

const book = lufthansa.book; //storage the funtion in a variable
book(23, 'Sarah Williams'); //property 'airline', 'iataCode' y 'booking' is undefined
//because this belongs only to the lufthansa object

//To fix the error and define this depends on the object (lufthansa, eurowings, etc...) we can do with: call, apply and bind methods:

//CALL METHOD
// call(objectName(eurowings), list of arguments) ... objectName => this (apunta a this)
book.call(eurowings, 23, 'Sarah Williams'); //Call method
console.log(eurowings);

book.call(lufthansa, 239, 'Harry Cooper');
console.log(lufthansa);

//Aerolínea 3
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    booking: [],
};

book.call(swiss, 483, 'Harry Cooper');
console.log(swiss);

//APPLY METHOD 
//(difference between call and apply is that apply doesn't receive a list of arguments after the this keyword, it receive an array with the arguments)
const flightData = [320, 'George Cooper'];
book.apply(swiss, flightData); //this is not use in the modern JS
console.log(swiss); 

//Better way:
book.call(swiss, ...flightData); //...flightData = list of arguments
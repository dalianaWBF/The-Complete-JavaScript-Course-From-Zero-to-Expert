"use strict";

//CLOSURES
//It's not a feature that we explicit use, we don't create closures manually, it's happened in certain situations

//It makes a function remember all the variables that existed at the functions birth place

//Any functions always has access to the variable environment of the execution context in which the function was created

//Closure: The variable environment attached to the function exactly as it was at the time and place the fucntion was created 

//Thanks to the closure a function doesn't lose conexion to variables that existed at the function birth place

//un history que contiene el valor de la variable en su última ejecución  (guarda en memoria)

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount ++; 
    console.log(`${passengerCount} passengers`);
  }
};

const booker = secureBooking();

booker(); //1 passengers
booker(); //2 passengers
booker(); //3 passengers

console.dir(booker);//see the closure
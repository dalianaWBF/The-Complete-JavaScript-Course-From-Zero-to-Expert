'use strict';

function looger () {
    console.log ('My name is Daliana');
}

looger();

//Receive data
function fruitProcessor (apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice; 
}

const appleJuice = fruitProcessor (5, 10);
console.log (appleJuice);
"use strict";

///////////////////////////////////////
// Timeout
setTimeout(() => console.log('Here is your pizza'), 3000 /*cantidad de milisegundos*/);
console.log('Waiting ...');

setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 4000, 'olives', 'spinach'); /*cantidad de milisegundos*/

const ingredientes = ['olives', 'spinach', 'tomato'];

const pizzaTimer = setTimeout((ing1, ing2, ing3) => console.log(`Here is your pizza with ${ing1}, ${ing2} and ${ing3}`), 5000, ...ingredientes); /*cantidad de milisegundos*/

//Si la pizza incluye spinaca no se ejecuta la función timeout
if(ingredientes.includes('spinach')) clearTimeout(pizzaTimer);


//simular una funcion que se ejecuta cada cierto tiempo
//setInterval
setInterval(function(){
    const now = new Date();
    console.log(now);
}, 1000);
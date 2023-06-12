"use strict";

//Inmediately invoked function expressions (IIFE)
//A functions execute once, disappear right after beeing called

const runOnce = function () { //this is normal function
  console.log('This will never runn again');
};

runOnce();

//Way 1
(function() {
    console.log('This will never runn again - true');
    const isPrivate = 23; //encansulado - privado
})();

console.log(isPrivate); //isPrivate is not defined

//Way 2
(() => console.log('This will ALSO never runn again'))();
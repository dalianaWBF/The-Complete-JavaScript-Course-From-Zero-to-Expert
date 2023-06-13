"use strict";

//MAP - FILTER - REDUCE

/*
FILTER - 
Look in an array and if the elements pass the filter they are store in a new array
Definition: Filter returns a new array containing the array elements that passed a specific test condition
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(mov){
  return mov > 0;
});

console.log(movements);
console.log(deposits); //200, 450, 3000, 70, 1300


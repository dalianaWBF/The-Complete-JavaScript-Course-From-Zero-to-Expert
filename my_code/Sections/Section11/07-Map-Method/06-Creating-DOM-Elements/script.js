"use strict";

//MAP - FILTER - REDUCE

/*
MAP - 
Similar to the forEach but creating a new array
Definition: Map returns a new array containing the results of applying an operation on all the original array element

FILTER - 
Look in an array and if the elements pass the filter they are store in a new array
Definition: Filter returns a new array containing the array elements that passed a specific test condition

REDUCE - 
Definition: Reduce boils ("reduce") all array elements down to one single value (e.g. adding all elements together)
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Map - inmutable
const eurToUSD = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD;
});

//An example with arrow function
const movementsUSDarrow = movements.map((mov) => mov * eurToUSD);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDarrow);

//Other way to do it
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUSD);
}

//Map has access to the current index, value and the array
const movementsDescriptions = movements.map(
  (movement, index, arr) =>
    `Movement ${index + 1} : You ${
      movement > 0 ? "deposited" : "withdrew"
    }  ${Math.abs(movement)}`
);

console.log(movementsDescriptions);

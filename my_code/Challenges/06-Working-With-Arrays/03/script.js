"use strict";

/*
Coding Challenge #3

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

Test data:
    - Data1:[5,2,4,1,15,8,3] 
    - Data2:[16,6,10,5,6,1,4]
*/

const juliaData = [3, 5, 2, 12, 7, 1];
const kateData = [4, 1, 15, 8, 3];
const dogsArray = [16, 6, 10, 5, 6, 1, 4]; //juliaData.slice(1, -2).concat(kateData);

//1. Calculate the dog age in human years
const calcAverageHumanAge = (dog) =>
  dog
    .map((dog) => (dog <= 2 ? 2 * dog : 16 + dog * 4))
    .filter(age => age >= 18)
    .reduce(
      (accumulator, currentValue, index, arr) =>
        accumulator + currentValue / arr.length,
      0
    );

console.log(calcAverageHumanAge(juliaData));
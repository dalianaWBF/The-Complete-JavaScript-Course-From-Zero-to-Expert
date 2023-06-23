"use strict";

///////////////////////////////////////
// Numeric Separators (it works only with numbers)

// 287,460,000,000
const diameter = 287_460_000_000; // _ a thousand separator 
console.log(diameter); //287460000000

const price = 345_99;
console.log(price); //34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI); //3.1415

console.log(Number('230_000')); //NaN
console.log(parseInt('230_000')); //230


"use strict";

///////////////////////////////////////
// Working with BigInt
//64 bits = 53 bits (almacenar el número) + 11 bits (decimal point + signo)

console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
//MAX_SAFE_INTEGER representa el entero más grande que JS puede representar de manera exacta, en los ejemplos siguientes se ve que no calcula bien la información una vez pasado de esa valor:
console.log(2 ** 53 + 1); //9007199254740992
console.log(2 ** 53 + 2); //9007199254740994
console.log(2 ** 53 + 3); //9007199254740996
console.log(2 ** 53 + 4); //9007199254740996

//the n at the n of a number convert the number in a BigInt one
console.log(4838430248342043823408394839483204n); //4838430248342043823408394839483204n
console.log(BigInt(48384302)); //48384302n

// Operations
console.log(10000n + 10000n); //20000n
console.log(36286372637263726376237263726372632n * 10000000n); //362863726372637263762372637263726320000000n

//Cannot mix BigInt and other types error message - esto sale cuando queremos hacer operaciones de BigInt con Int
const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num)); //466666095457525752699451n
//console.log(Math.sqrt(16n));

// Exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); //bigint
console.log(20n == '20'); //true

console.log(huge + ' is REALLY big!!!'); //20289830237283728378237 is REALLY big!!!

// Divisions
console.log(11n / 3n); //3n (quita la parte decimal y devuelve el bigint más próximo)
console.log(10 / 3); //3.3333333333333335

//operaciones matemáticas
const now = 2023;
const ageJonas = now - 1991;
const myAge = now - 1996;

console.log (ageJonas * 2, myAge / 10, 2 ** 3);
//2 ** 3 = 2 * 2 * 2 o 2^3

//concatenar strings
const firstName = 'Jonas';
const lastName = 'Rodriguez';
console.log (firstName + ' ' + lastName);

//operaciones básicas
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++;
x--;
console.log(x);

//operadores de comparación
console.log (ageJonas > myAge);
const isFullAge = ageJonas >= 18;
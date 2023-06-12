"use strict";

//ARRAYS

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE - inmutable
//Extract part of an array and create a copy of the original array
//slice(startPosition, finalPosition)
console.log(arr.slice(2)); //'c', 'd', 'e'
console.log(arr.slice(2, 4)); //'c', 'd'
console.log(arr.slice(-2)); //'d', 'e'
console.log(arr.slice(-1)); //'e'
console.log(arr.slice(1, -2)); //'b', 'c'

console.log(arr.slice()); //copy of the array
console.log([...arr]); //copy of the array



//SPLICE - mutable
//Extract part of an array and delete if from the original one
//splice(startPosition, numberOfElements)
console.log(arr.splice(2)); //'c', 'd', 'e'
console.log(arr); //'a', 'b'

//Delete the last value of an array
console.log(arr.splice(-1));
console.log(arr); //'a', 'b', 'c', 'd'



//REVERSE - mutable
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //['f', 'g', 'h', 'i', 'j']
console.log(arr2); //['f', 'g', 'h', 'i', 'j']



//CONCAT - inmutable
const letters = arr.concat(arr2);
console.log(letters);
console.log(arr);



//JOIN - inmutable
//convierte un array en un string "unido" por el separador especificado
console.log(letters.join(' - '));
console.log(letters);

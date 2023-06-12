"use strict";

//ARRAYS

//AT METHOD - Inmutable
const arr = [12, 45, 78];
console.log(arr[0]); //12
console.log(arr.at(0)); //12

//getting the last element of an array
console.log(arr[arr.length-1]); //78
console.log(arr.slice(-1)[0]); //78
console.log(arr.at(-1)); //78


//WITH STRING
console.log('daliana'.at(-2)); //n
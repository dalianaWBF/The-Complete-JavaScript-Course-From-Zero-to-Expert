"use strict";

//ARRAYS

//FOR EACH
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('------ FOR OF ------ ');
for (const movement of movements) { //for of
  if(movement > 0){
    console.log( `You deposited ${movement}`);
  }else {
    console.log( `You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------ FOR EACH ------ ');
movements.forEach(function(movement){
  if(movement > 0){
    console.log( `You deposited ${movement}`);
  }else {
    console.log( `You withdrew ${Math.abs(movement)}`);
  }
});

//GET ACCESS TO THE INDEX OF EACH ELEMENT
console.log('------ FOR OF ------ ');
for (const [index, movement] of movements.entries()) { //for of
  if(movement > 0){
    console.log( `Movement ${index + 1} : You deposited ${movement}`);
  }else {
    console.log( `Movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------ FOR EACH ------ ');
//function(movement, index, array) = function(current value, index, the array we are looping over)
//break and continue doesn't work in forEach method
movements.forEach(function(movement, index, array){
  if(movement > 0){
    console.log( `Movement ${index + 1} : You deposited ${movement}`);
  }else {
    console.log( `Movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
  }
});
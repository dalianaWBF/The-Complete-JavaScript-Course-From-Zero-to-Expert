"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const accounts = [account1, account2, account3, account4];
const user = "Steven Thomas Williams"; //Username: stw


//SORT - mutable
//it works with strings
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort()); //[ 'Adam','Jonas','Martha', 'Zack']
console.log(owners); //[ 'Adam','Jonas','Martha', 'Zack']

//Numbers
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70] (it doesn't work with numbers)

//fix the problem
// return < 0 (A, B ...) - keep order
// return > 0 (B, A ...) - switch order

movements.sort((currentValue, nextValue) => { //ascending order
  if(currentValue > nextValue) {
    return 1;
  } if(currentValue < nextValue){
    return -1;
  }
});

console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

//other way to do it
movements.sort((currentValue, nextValue) => currentValue - nextValue); 
console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]



movements.sort((currentValue, nextValue) => { //descending order
  if(currentValue > nextValue) {
    return -1;
  } if(currentValue < nextValue){
    return 1;
  }
});

console.log(movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]

//other way to do it
movements.sort((currentValue, nextValue) => nextValue - currentValue); 
console.log(movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]

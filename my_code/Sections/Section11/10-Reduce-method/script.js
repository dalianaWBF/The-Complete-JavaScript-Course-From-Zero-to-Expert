"use strict";

/////////////////////////////////////////////////
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

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//Desplegar los movimientos de la cuenta
const displayMovement = function (movements) {
  containerMovements.innerHTML = ""; //similar to textContent

  movements.forEach(function (mov, index) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    //insertAdjacentHTML(position of the element, string containg the HTML)
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovement(account1.movements);

//balance de la cuenta usando reduce
const calcDisplayBalance = function (movement) {
  const balnaceG = movement.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balnaceG} EUR`;
};

calcDisplayBalance(account1.movements);

const createUsernames = function (accounts) {
  //forEach
  accounts.forEach(function (accounts) {
    accounts.username = accounts.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

//MAP - FILTER - REDUCE

/*
REDUCE - 
Definition: Reduce boils ("reduce") all array elements down to one single value (e.g. adding all elements together) - snowball
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//reduce(function(accumulator, currentValue, index, arr){}
const balance = movements.reduce(function (
  accumulator,
  currentValue,
  index,
  arr
) {
  console.log(`Iteration ${index}: ${accumulator}`);
  return accumulator + currentValue;
},
0); //the initial value of the accumulator

console.log(balance);

//For of way:
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2);

//Find the maximum value
const max = movements.reduce((acc, mov) => {
  if(acc > mov){
    return acc;
  }else{
    return mov;
  }
}, movements[0]); 

console.log(max);
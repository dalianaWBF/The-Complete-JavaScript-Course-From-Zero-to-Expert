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

const accounts = [account1, account2, account3, account4];
const user = "Steven Thomas Williams"; //Username: stw


//Desplegar los movimientos de la cuenta
const displayMovement = function(movements){
  containerMovements.innerHTML = ''; //similar to textContent

  movements.forEach(function (mov, index) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = 
    `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    //insertAdjacentHTML(position of the element, string containg the HTML)
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovement(account1.movements);


//balance de la cuenta usando reduce
const calcDisplayBalance = function (movement) {
  const balnaceG = movement.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balnaceG} EUR`;
};

calcDisplayBalance(account1.movements);


//Crear los usernames
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

//console.log(accounts); //stw
createUsernames(accounts);
console.log(accounts);

//PIPELINE
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  //.map((mov) => mov * eurToUsd)
  .map((mov, index, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD); //5522.0000000001

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

const createUsernames = function (accounts) {
  //forEach
  accounts.forEach(function (accounts) {
    accounts.username = accounts.owner
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
  });

  // const username = user
  //   .toLowerCase()
  //   .split(" ")
  //   .map((name) => name[0])
  //   .join("");
  // return username;
};

//console.log(accounts); //stw
createUsernames(accounts);
console.log(accounts);
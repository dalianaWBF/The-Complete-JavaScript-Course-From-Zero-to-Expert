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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const accounts = [account1, account2, account3, account4];
const user = "Steven Thomas Williams"; //Username: stw

//Practice

//-----------
//EXERCISE 1
//-----------

//get the movemenet in one array
const bankDepositSum = accounts.map((acc) => acc.movements);
console.log(bankDepositSum);
//[Array(8), Array(8), Array(8), Array(5)]

//get the value out the arrays
console.log(bankDepositSum.flat());
//[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

const bankDepositSum2 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);

console.log(bankDepositSum2); //25180

//-----------
//EXERCISE 2
//-----------

//Count how many deposit have been with al least $1000
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000);

console.log(numDeposits1000); //[3000, 1300, 5000, 3400, 8500, 1000]

//Count how many values has an array - using the reduce method
const numDeposits1000_2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

console.log(numDeposits1000_2); //6

//-----------
//EXERCISE 3
//-----------

//Create an object with the sum of the deposit and of the withdrawls
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, curr) => {
      //One way
      //curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);

      //Other way
      sums[curr > 0 ? "deposits" : "withdrawals"] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sums); //{deposits: 25180, withdrawals: -7340}

//-----------
//EXERCISE 4
//-----------

//function that convert any string to a title case
//Ex: this is a nice title => This Is a Nice Title

const convertTitleCase = function (title) {
  const expectations = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => expectations.includes(word) ? word : word[0].toUpperCase() + word.slice(1));
  console.log(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
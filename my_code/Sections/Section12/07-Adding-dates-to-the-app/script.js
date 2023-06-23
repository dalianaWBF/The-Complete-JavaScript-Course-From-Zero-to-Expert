"use strict";

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2022-11-18T21:31:17.178Z",
    "2022-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-05-18T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-06-20T17:01:17.194Z",
    "2023-04-28T23:36:17.929Z",
    "2023-06-22T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2022-11-01T13:15:33.035Z",
    "2022-11-30T09:48:16.867Z",
    "2022-12-25T06:04:23.907Z",
    "2023-06-19T14:18:46.235Z",
    "2023-02-05T16:33:06.386Z",
    "2023-04-10T14:43:26.374Z",
    "2023-06-22T18:49:59.371Z",
    "2023-06-12T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
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

const accounts = [account1, account2];

//Date function:
const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDaysPassed(new Date(), date);
  console.log(dayPassed);

  if (dayPassed === 0) return "Today";
  if (dayPassed === 1) return "Yesterday";
  if (dayPassed <= 7) return `${dayPassed} days ago`;
  else {
    //day/month/year
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};

//Desplegar los movimientos de la cuenta
const displayMovement = function (account, sort = false) {
  containerMovements.innerHTML = ""; //similar to textContent
  const movs = sort
    ? account.movements
        .slice()
        .sort((currentValue, nextValue) => currentValue - nextValue)
    : account.movements;

  movs.forEach(function (mov, index) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(account.movementsDates[index]);
    const displayDate = formatMovementDate(date);

    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1} ${type}
    </div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>`;

    //insertAdjacentHTML(position of the element, string containg the HTML)
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//balance de la cuenta usando reduce
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance.toFixed(2)}€`;
};

//calcular el income, el outcome y el interes
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const outcomes = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes.toFixed(2))}€`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100) //1.2% of the deposit amount
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

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

const updateUI = function (currentAccount) {
  //Display movements
  displayMovement(currentAccount);

  //Display balance
  calcDisplayBalance(currentAccount);

  //Display summary
  calcDisplaySummary(currentAccount);
};

//Login
let currentAccount;

/////////////////////////////////////////////////
//Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
/////////////////////////////////////////////////

btnLogin.addEventListener("click", function (e) {
  //Prevent form from submitting
  e.preventDefault(); //prevent the reload of the page

  currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100; //hacer visible el contenido

    //Set the date
    const now = new Date();
    //labelDate.textContent = now;

    //day/month/year
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    const dayOrNight = hour <= 12 ? "AM" : "PM";

    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min} ${dayOrNight}`;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur(); //Pierde el foco

    updateUI(currentAccount);

    console.log(inputLoginPin.value);
  }
});

//Transfer money from one account to another
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amountToTransfer = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    (account) => account.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = "";

  //check the amount of the transfer
  if (
    amountToTransfer > 0 &&
    receiverAccount &&
    currentAccount.balance >= amountToTransfer &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amountToTransfer);
    receiverAccount.movements.push(amountToTransfer);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
  }
});

//-----------------------------------------------------------------------
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //Add movement
    currentAccount.movements.push(amount);
    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    //update ui
    updateUI(currentAccount);

    //clear the field
    inputLoanAmount.value = "";
  }
});

//-----------------------------------------------------------------------
//findIndex
//delete an object from an array - splice (but it need a index)

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const indexToDelete = accounts.findIndex(
      (account) => account.username === currentAccount.username
    );

    //Delete account
    accounts.splice(indexToDelete, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  //Clear the fields
  inputCloseUsername.value = inputClosePin.value = "";
});

//sort the movement
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovement(currentAccount, !sorted);
  sorted = !sorted;
});

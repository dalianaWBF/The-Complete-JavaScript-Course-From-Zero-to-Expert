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

//Desplegar los movimientos de la cuenta
const displayMovement = function (movements) {
  containerMovements.innerHTML = ""; //similar to textContent

  movements.forEach(function (mov, index) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    //insertAdjacentHTML(position of the element, string containg the HTML)
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//balance de la cuenta usando reduce
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance}€`;
};

//calcular el income, el outcome y el interes
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100) //1.2% of the deposit amount
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
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
  displayMovement(currentAccount.movements);

  //Display balance
  calcDisplayBalance(currentAccount);

  //Display summary
  calcDisplaySummary(currentAccount);
};

//Login
let currentAccount;
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

    updateUI(currentAccount);
  }
});

//-----------------------------------------------------------------------
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //Add movement
    currentAccount.movements.push(amount);
    
    //update ui
    updateUI(currentAccount);

    //clear the field
    inputLoanAmount.value = '';
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

//-----------------------------------------------------------------------
//SOME AND EVERY
console.log(movements.includes(-130)); //verifica si existe ese valor en el array

//SOME
//positive movement in the array
const anyDeposits = movements.some((mov) => mov > 5000);
console.log(anyDeposits); //devuelve true si ALGUNO de los valores cumple la condicion 


//EVERY
console.log(account4.movements.every(mov => mov > 0));  //devuelve true si TODOS de los valores cumple la condicion 


//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
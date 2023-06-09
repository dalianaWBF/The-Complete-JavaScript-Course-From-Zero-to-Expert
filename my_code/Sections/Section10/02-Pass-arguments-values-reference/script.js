"use strict";

const flight = 'JH738'; //primitive value
const jonas = { //reference type
  name: 'Jonas Schmedtmann',
  passport: 2356789
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LO829'; //make a copy of the flightNum variable (because it's a string)
  passenger.name = 'Mr. ' + passenger.name; //it's going to change the value of the object

  if(passenger.passport === 2356789) {
    alert('Checked in');
  }else{
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); //'JH738'
console.log(jonas); //'Mr. Jonas Schmedtmann'

//Example
const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
  console.log(person.passport);
};

newPassport(jonas);
checkIn(flight, jonas);


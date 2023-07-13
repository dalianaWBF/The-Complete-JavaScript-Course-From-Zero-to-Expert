'use strict';


///////////////////////////////////////
// Constructor Functions and the new Operator
class Person {
  constructor(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this! no create methods inside of the construction function
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  }
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} (empty object) is created
// 2. function is called, this = {}  (empty object)
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person); //true

Person.hey(); //'Hey there 👋'

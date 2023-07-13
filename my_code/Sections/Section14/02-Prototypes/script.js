'use strict';

///////////////////////////////////////
// Prototypes
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
const matilda = new Person('Matilda', 2017);

//Prototype inheritance:
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__); //prototype of jonas object
console.log(jonas.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
//Person.prototype is not the prototype o f Person
console.log(Person.prototype.isPrototypeOf(Person)); //false

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens'; //se añaden propiedades al prototipo
console.log(jonas, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false

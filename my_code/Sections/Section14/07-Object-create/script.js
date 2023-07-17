'use strict';

///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

//crear un objeto
const steven = Object.create(PersonProto); //PersonProto es el prototype de steven
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); //true

//crear un objeto
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

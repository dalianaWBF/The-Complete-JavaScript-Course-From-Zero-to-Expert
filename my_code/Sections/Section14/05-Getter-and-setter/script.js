'use strict';

///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  ///Validation of the fullname (if it cointains white space and two name, it's a fullname)
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name; //when the setter where is trying to set a property that already exist the name is _nameofthevariable (e.g. _fullName) this create a new variable
    else alert(`${name} is not a full name!`);
  }

  //return the new variable value
  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();


///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) { //the set and get works as a function properties
    this.movements.push(mov);
  },
};

console.log(account.latest); //300

account.latest = 50;
console.log(account.movements); //[200, 530, 120, 300, 50]

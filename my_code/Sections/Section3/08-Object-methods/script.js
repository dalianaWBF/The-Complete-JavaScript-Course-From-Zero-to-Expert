'use strict';

const jonas = {
    firstName: 'Jonas',
    lastName: 'Robinson', 
    birthYear: 1996, 
    profession: 'teacher', 
    friends: ['Daliana', 'Dayana', 'Maria'],
    hasDriversLicense: true,

    //Expressions (method)
    // calcAge: function (birthYear) {
    //     return 2039 - this.birthYear;
    // }

    // calcAge: function () {
    //     return 2039 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2039 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.profession}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
      }
};

//console.log(jonas);
console.log(jonas.calcAge()); //Una forma
// console.log(jonas['calcAge']()); //Otra forma
console.log(jonas.age);
// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());


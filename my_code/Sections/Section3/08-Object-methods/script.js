'use strict';

const jonas = {
    firstName: 'Jonas',
    lastName: 'Robinson', 
    birthYear: 1996, 
    profession: 'teacher', 
    friends: ['Daliana', 'Dayana', 'Maria'],
    basDriversLicense: true,

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
    }
};

console.log(jonas);
// console.log(jonas.calcAge()); //Una forma
// console.log(jonas['calcAge']()); //Otra forma
console.log(jonas.age);



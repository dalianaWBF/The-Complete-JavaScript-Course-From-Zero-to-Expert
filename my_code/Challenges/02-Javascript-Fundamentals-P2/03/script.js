// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This 
time, let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / 
(height * height) (mass in kg and height in meter)

Your tasks:
    1. For each of them, create an object with properties for 
    their full name, mass, and height (Mark Miller and John 
    Smith)
    2. Create a 'calcBMI' method on each object to calculate
    the BMI (the same method on both objects). Store the BMI 
    value to a property, and also return it from the method
    3. Log to the console who has the higher BMI,together 
    with the full name and the respective BMI. 
    Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

    Test data: Marks weights 78 kg and is 1.69 m tall. 
    John weights 92 kg and is 1.95 m tall.
*/
"use strict";

const mark_Miller = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 92,
  heigh: 1.99,

  calcBMI: function () {
    this.bmi= this.mass / this.heigh ** 2;
    return this.bmi.toFixed(2);
  },
};

const john_Smith = {
  firstName: "John",
  lastName: "Smith",
  mass: 78,
  heigh: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.heigh ** 2;
    return this.bmi.toFixed(2);
  },
};

console.log(mark_Miller.calcBMI()>john_Smith.calcBMI() 
? 
`${mark_Miller.firstName}'s BMI (${mark_Miller.calcBMI()}) is higher than ${john_Smith.firstName}'s (${john_Smith.calcBMI()})!` 
: 
`${john_Smith.firstName}'s BMI (${john_Smith.calcBMI()}) is higher than ${mark_Miller.firstName}'s (${mark_Miller.calcBMI()})!`);


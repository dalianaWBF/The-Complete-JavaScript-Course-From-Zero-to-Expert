"use strict";

/*
CODING CHALLENGE #2

1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

*/

//1. Use a constructor function to implement a 'Car'.
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed/1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(`CAR 1: '${this.make}' going at ${this.speed} km/h`);
  }

}

//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

//3. Implement a 'brake' methodth at will decrease the car's speed by 5,and log the new speed to the console
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

//4. Create2'Car'objects
const carNew = new Car("Ford", 120);

//4.1 Experiment with calling 'accelerate' and 'brake' multiple times on each of them
carNew.accelerate();
carNew.brake();
console.log(carNew.speedUS);
carNew.speedUS = 50;
console.log(carNew);


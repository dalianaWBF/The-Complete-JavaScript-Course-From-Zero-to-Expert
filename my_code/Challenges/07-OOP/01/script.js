'use strict';

/*
CODING CHALLENGE #1

Your tasks:
  1. Useaconstructorfunctiontoimplementa'Car'.Acarhasa'make'anda 'speed' property. The 'speed' property is the current speed of the car in km/h
  2. Implementan'accelerate'methodthatwillincreasethecar'sspeedby10, and log the new speed to the console
  3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5,andlog the new speed to the console
  4. Create2'Car'objectsandexperimentwithcalling'accelerate'and 'brake' multiple times on each of them

Test data:
§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h

*/

//1. Use a constructor function to implement a 'Car'.
class Car {
  constructor (make, speed) {
    this.make = make;
    this.speed = speed;
  }
};

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
const car1 = new Car ('BMW', 120);
const car2 = new Car ('Mercedes', 95);

//4.1 Experiment with calling 'accelerate' and 'brake' multiple times on each of them
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.brake();
car2.brake();



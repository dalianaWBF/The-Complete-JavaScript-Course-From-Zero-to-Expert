"use strict";

//Default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 + numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LJ908", 189, 2000); //'LJ908', 189, 2000
createBooking("LJ908", 189); //'LJ908', 189, 388

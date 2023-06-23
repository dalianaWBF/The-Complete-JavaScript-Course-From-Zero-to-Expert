"use strict";

///////////////////////////////////////
// Operations With Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); //Number(future) //2142274980000

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1); //10 (cantidad de dias entre ambas fechas)
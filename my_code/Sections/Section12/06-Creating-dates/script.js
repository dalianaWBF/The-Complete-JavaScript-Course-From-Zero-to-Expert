"use strict";

///////////////////////////////////////
// Creating Dates

// Create a date
// const now = new Date(); 
// console.log(now); //fecha actual

// console.log(new Date('Aug 02 2020 18:05:41')); //Sun Aug 02 2020 18:05:41 GMT-0500 (Ecuador Time)
// console.log(new Date('December 24, 2015')); //Thu Dec 24 2015 00:00:00 GMT-0500 (Ecuador Time)
// console.log(new Date('2019-11-18T21:31:17.178Z')); //Mon Nov 18 2019 16:31:17 GMT-0500 (Ecuador Time)

// //(year, month, day, hour, minute, second)
// console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT-0500 (Ecuador Time)
// console.log(new Date(2037, 10, 31)); //Tue Dec 01 2037 00:00:00 GMT-0500 (Ecuador Time)

// console.log(new Date(0)); //Wed Dec 31 1969 19:00:00 GMT-0500 (Ecuador Time)
// //3 days after the Date(0) in miliseconds
// console.log(new Date(3 * 24 * 60 * 60 * 1000));


// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //Thu Nov 19 2037 15:23:00 GMT-0500 (Ecuador Time)
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); //10 (porq empieza desde 0)
console.log(future.getDate()); //19 (día del mes)
console.log(future.getDay()); //4 (día de la semana)
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T20:23:00.000Z
console.log(future.getTime()); //2142274980000 //timestamp - el tiempo transcurrido en milisegundos desde el 1 enero de 1970

console.log(new Date(2142256980000)); //Thu Nov 19 2037 15:23:00 GMT-0500 (Ecuador Time)

console.log(Date.now()); //1687495464307

future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:00 GMT-0500 (Ecuador Time)
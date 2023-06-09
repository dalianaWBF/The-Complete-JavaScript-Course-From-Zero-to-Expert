"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//Este es el output que se quiere obtener:
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

//My solution

//1. Dividir la información en 4 partes
const elementos = flights.split("+");

//Trabajar con cada uno de los elementos

for (const element of elementos) {
  const estadoPrimero = element.replaceAll("_", " ");
  const state = estadoPrimero.split(";");

  const text = `${state[0]} from ${state[1]
    .slice(0, 3)
    .toUpperCase()} to ${state[2]
    .slice(0, 3)
    .toUpperCase()} (${state[3].replace(":", "h")})`;

    state[0].includes('Delayed') ? console.log('🔴' + text) : console.log(text.padStart(42));
}


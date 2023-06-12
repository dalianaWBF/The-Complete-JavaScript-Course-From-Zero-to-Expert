"use strict";

// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(currentValue, key, map){
  console.log(`${key}: ${currentValue}`);
});


// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) { // _ en JS significa un valor que puede ser omitido
  console.log(`${value}: ${value}`);
});

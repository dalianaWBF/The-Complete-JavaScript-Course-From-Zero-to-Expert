"use strict";

///////////////////////////////////////
// Internationalizing Numbers (Intl)
const num = 3884764.23;
console.log("US: ", new Intl.NumberFormat("en-US").format(num)); 
//US:  3,884,764.23

console.log("Germany: ", new Intl.NumberFormat("de-DE").format(num)); 
//Germany:  3.884.764,23

console.log("ES: ", new Intl.NumberFormat("es-EC").format(num)); 
//ES:  3.884.764,23

const options = {
  style: 'unit',// 'currency',
  unit: 'mile-per-hour', //mile-per-hour
  //currency: 'EUR', (the currency is not associate per country)
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num)); //US:       3,884,764.23 mph
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num)); //Germany:  3.884.764,23 mi/h
console.log('Japon:   ', new Intl.NumberFormat('ja-JP', options).format(num)); //Japon:    3,884,764.23 mph
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

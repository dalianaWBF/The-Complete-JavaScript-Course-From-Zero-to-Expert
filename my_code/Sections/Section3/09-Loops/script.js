'use strict';

const jonas = [
    'Jonas', 
    'John', 
    2037-1992, 
    'teacher', 
    ['Daliana', 'Dayana', 'Maria']
];
//console.log(jonas);

const typesValues = [];

for (let i = 0; i<jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);
    typesValues.push(typeof jonas[i]);
}

console.log(typesValues);

//Other example:
const years = [1991, 1994, 2000, 2010];
const ages = [];

for (let i=0; i<years.length; i++){
    ages.push (2023 - years[i]);
}
console.log(ages);

//Continue and break
console.log('----- ONLY STRINGS -----');
for (let i = 0; i<jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('----- BREAK WITH NUMBERS -----');
for (let i = 0; i<jonas.length; i++){
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

//While loop
console.log('----- WHILE LOOP -----');
let i = 1;
while (i <= 10) {
    console.log (`While loop ${i}`);
    i++;
}

//other example
console.log('----- WHILE LOOP - DICE EXAMPLE -----');
let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
    console.log (`You roll a ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1);
    if (dice === 6) console.log ('Loop is about to end ...');
}
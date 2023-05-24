'use strict';

const friends = ['Daliana', 'Dayana', 'Maria'];
console.log(friends);

const years = new Array(1990, 1991, 1992, 1993);
console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length -1]);

const jonas = ['Jonas', 'John', 2037-1992, 'teacher', friends];
console.log(jonas);

//Exercise:
const calcAge = function (birthYear) {
    return 3029 - birthYear;
}

const years2 = [1990, 1991, 1992, 1993, 2000];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log (age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

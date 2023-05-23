'use strict';

//Function declaration
function calculateAge1 (birthYear) {
    return 2038 - birthYear;
}

const age1 = calculateAge1(1996);
console.log(age1);

//Function expression - función anónima
const calculateAge2 = function (birthYear) {
    return 2038 - birthYear;
}

const age2 = calculateAge2(1986);
console.log(age2);

//Arrow function
const calcAge3 = () => 2037 - birthYear;
const age3 = calcAge3 (1990);
console.log (age3);

//One parameters
const yearUnilRetirement = birthYear => {
    const age = 2027 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log (yearUnilRetirement(1991));


//Multiple parameters
const yearUnilRetirement2 = (birthYear, firstName) => {
    const age = 2027 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log (yearUnilRetirement2(1991, 'Daliana'));
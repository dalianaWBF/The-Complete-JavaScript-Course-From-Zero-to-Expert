//-----------------------------------------------------------------
//TYPE CONVERSION
//this is when we have different types of data and we need to 
//work with them:
const inputYear = '1996';
console.log(Number(inputYear), inputYear);

//In this case we want to add 4 to the inputYear.
//This is going to convert the inputYear into a String and
//them added to 4
console.log(Number(inputYear) + 4); //2000 as a number

//Now, if we don't use Number to convert the String into a 
//number, what is going to happened is JS is gonna concatenate
//inputYear and 4 as an String

console.log(inputYear + 4); //19964 as a String


//-----------------------------------------------------------------
//TYPE COERCION

//the '+' concatenate
console.log('I am ' + 26 + 'years old'); //The output: 'I am 26 years old' as a String

//the '-, *, /, **' convert the string into numbers
console.log('23' / '4' * 7); //40.25 as a number
console.log('25' / '5'); //5 as a number


//-----------------------------------------------------------------
/* FIVES FALSY VALUES:
Are values that once JS try to convert them to a boolean they 
are going to be equals false:
    0, 
    '',
    undefined,
    null,
    NaN
*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Daliana'));
console.log(Boolean({}));
console.log(Boolean(''));
console.log(Boolean(null));




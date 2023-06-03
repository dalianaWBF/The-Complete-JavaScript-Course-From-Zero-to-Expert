// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console,saying who has the higher BMI.
The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the 
outputs.
Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
*/

let massMark = 95;
let heighMark = 1.88;
let massJohn = 85;
let heighJohn = 1.76;

function BMI_calculator_for_Mark (mass, heigh) {
    return BMI_1 = mass / heigh ** 2; 
}

function BMI_calculator_for_John (mass, heigh) {
    return BMI_2 = mass / (heigh * heigh); 
}

let Mark_BMI = BMI_calculator_for_Mark(massMark, heighMark);
let John_BMI = BMI_calculator_for_John(massJohn, heighJohn);
let markHigherBMI = Mark_BMI > John_BMI;

if (markHigherBMI) {
    console.log(`Mark's BMI (${Mark_BMI.toFixed(2)}) is higher than John's ${John_BMI.toFixed(2)}!`);
}else {
    console.log(`John's BMI (${John_BMI.toFixed(2)}) is higher than Mark's (${Mark_BMI.toFixed(2)})!`);
}

// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even 
    implement both versions)
    3. Create a Boolean variable 'markHigherBMI' containing 
    information about whether Mark has a higher BMI than John.
Test data:
    - Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
    - Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

let massMark = 95;
let heighMark = 1.88;
let massJohn = 85;
let heighJohn = 1.76;

function BMI_calculate (mass, heigh) {
    return BMI_1 = mass / heigh ** 2; 
}
// BMI_1 = mass / heigh ** 2; 
// BMI_2 = mass / (heigh * heigh); 

let Mark_BMI = BMI_calculate(massMark, heighMark);
let John_BMI = BMI_calculate(massJohn, heighJohn);
let markHigherBMI = Mark_BMI > John_BMI;

console.log ("Mark_BMI: " + Mark_BMI);
console.log ("John_BMI: " + John_BMI);
console.log(markHigherBMI);

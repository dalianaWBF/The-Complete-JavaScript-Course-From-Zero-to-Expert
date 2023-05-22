const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log (hasDriversLicense && hasGoodVision); //AND
console.log (hasDriversLicense || hasGoodVision); //OR
console.log (!hasDriversLicense); //NOT 


const isTired = false; //C
console.log (hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log ('Sarah is able to drive!');
}else {
    console.log ('Someone else should drive...');
}


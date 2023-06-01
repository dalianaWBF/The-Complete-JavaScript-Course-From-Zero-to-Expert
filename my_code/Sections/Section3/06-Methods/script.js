'use strict';

const friends = ['Daliana', 'Dayana', 'Maria'];

const aux = [...friends]; 
console.log('MY NUEVO VALOR', aux); //['Daliana', 'Dayana', 'Maria', 'Kenia']
console.log('LONGITUD',aux.length);


 //add elements to the end
const newLength = aux.push('Julio');

console.log(aux);
console.log(newLength);

 //add elements to the begin
aux.unshift('Kenia'); 
console.log(aux);


//remove the last element
aux.pop();
const popped = aux.pop();
console.log(aux);
console.log(popped);

//remove the first element
aux.shift();
console.log(aux);

// returns the position of the array
console.log (aux.indexOf('Daliana'));

aux.push(23);
//Returns a boolean if the value is in the array (true) or not (false)
console.log (aux.includes('Daliana')); // true
console.log (aux.includes('Dala')); //false
console.log (aux.includes('23')); //false because it compares strict

if(aux.includes('Daliana')) {
    console.log ('You have a friend called Daliana');
}

console.log("FRIENDS", friends);




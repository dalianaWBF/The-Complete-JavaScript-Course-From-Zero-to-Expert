'use strict';

const friends = ['Daliana', 'Dayana', 'Maria'];
 //add elements to the end
const newLength = friends.push('Julio');

console.log(friends);
console.log(newLength);

 //add elements to the begin
friends.unshift('Kenia'); 
console.log(friends);


//remove the last element
friends.pop();
const popped = friends.pop();
console.log(friends);
console.log(popped);

//remove the first element
friends.shift();
console.log(friends);

// returns the position of the array
console.log (friends.indexOf('Daliana'));

friends.push(23);
//Returns a boolean if the value is in the array (true) or not (false)
console.log (friends.includes('Daliana')); // true
console.log (friends.includes('Dala')); //false
console.log (friends.includes('23')); //false because it compares strict

if(friends.includes('Daliana')) {
    console.log ('You have a friend called Daliana');
}






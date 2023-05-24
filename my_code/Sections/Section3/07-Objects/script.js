'use strict';

const jonas = {
    firstName: 'Jonas',
    lastName: 'Robinson', 
    age: 2037-1992, 
    profession: 'teacher', 
    friends: ['Daliana', 'Dayana', 'Maria']
};

console.log(jonas);

//call the values:
console.log(jonas.profession);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


//const interestedIn = prompt("What do you do want to know about Jonas? Choose between firstName, lastName, age, profession, friends");

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// }else {
//     console.log("Wrong request! Choose between firstName, lastName, age, profession, friends");
// }

//Add to the object
jonas.location = 'Portugal'; //Option 1
jonas['twitter'] = '@test'; //Option 2
console.log(jonas);

//Challenge
//"Jonas has 3 friends, and his best friend is called Daliana"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
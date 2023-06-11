"use strict";

//Functions returning functions
const greet = function(greeting){
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
};

const greeterHey = greet('Hey');

greeterHey('Daliana');
greeterHey('Rebeca');

greet('Hello')('Daliana'); //otro forma de llamar a las dos funciones


//Challenge - Rewrite with arrows functions
const greetArrow = greeting => {
    return name => {
        console.log(`${greeting} ${name}`);
    }
};

greetArrow('Hello')('Daliana');
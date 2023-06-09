"use strict";

//Functions accepting other functions as input (callback functions)
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFisrtWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const tranformer = function(str, fn) {
    console.log(`Original strings: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};

tranformer('JavaScript is the best!', upperFisrtWord); //JAVASCRIPT is the best!

tranformer('JavaScript is the best!', oneWord); //javascriptisthebest!

const high5 = function () {
    console.log('👋🏼');
};

document.body.addEventListener('click', high5);

['Jonas', 'Marta', 'Adam'].forEach(high5); //'👋🏼', '👋🏼', '👋🏼'

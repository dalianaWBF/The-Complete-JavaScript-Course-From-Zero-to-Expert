// Diferencias entre un var, un const y un let
// para declarar variables

/*
- VAR
Variables declared using the var keyword are either globally or 
functionally scoped, they do not support block-level scope. 
This means that if a variable is defined in a loop or in an if 
statement it can be accessed outside the block and accidentally 
redefined leading to a buggy program. As a general rule, you 
should avoid using the var keyword.

- LET
In many ways, the let keyword is very similar to the var keyword 
as they both allow you to reassign the value later on. The main 
difference between the two is that let deals with a block scope 
and although it can be reassigned it cannot be redeclared.

- CONST
Like the let keyword, the const keyword is also blocked scoped. 
However, declaring a variable with the const keyword means that 
it cannot only be redeclared but also it cannot be reassigned. 
Therefore, every const variable must be assigned a value at the 
time of declaration
*/

//Examples:

//
//var
//
var colour = "red";
console.log(colour); //red

function getColour() {
  console.log(colour); //color is accesible here
}
getColour(); //red

if (true) {
  var greeting = "hello!";
  console.log(greeting); // 'hello!';
}
console.log(greeting); // 'hello!'

//
//let
//
// let numer = 10;
// number = 100000;

// console. log (number); // Prints 100000

// let number = 10;
// let number = 100000;

// console. log (number); // SyntaxError: Identifier 'number' has already been declared

// let number = 50;
// { let number = 100000;
// console. log (number) ;} // Prints 100000

// //
// //const
// //
// const pi;
// //=> Uncaught SyntaxError: Missing initializer in const declaration
// const PI = 3.14159;
// console. log (PI);
//=> undefined

//
//General example
//
if (true) {
  var a = "hello!";
  let b = "hi!";
  const c = "bye!";
  console.log(a); // 'hello!';
  console.log(b); // 'hi!';
  console.log(c); // 'bye!';
}
console.log(a); // 'hello!';
console.log(b); // ReferenceError: b is not defined console. log (c); // ReferenceError: c is not defined

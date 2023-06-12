"use strict";

//CLOSURES
//It's not a feature that we explicit use, we don't create closures manually, it's happened in certain situations

//It makes a function remember all the variables that existed at the functions birth place

//Any functions always has access to the variable environment of the execution context in which the function was created

//Closure: The variable environment attached to the function exactly as it was at the time and place the fucntion was created 

//Thanks to the closure a function doesn't lose conexion to variables that existed at the function birth place

/*PARA MI: 
Términos: 
- Función Padre (FP)
- Función hija (FH)

Cuando la FH es definida dentro de la FP y utiliza variable(s) definidas dentro de la FP, el closure lo que hace es tener memoria del último valor definido para esa(s) variable(s) y permitir que la FH pueda trabajar con esos valores aún cuando la FP ya terminó su ejecución
*/

//EXAMPLE 1
let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
};

const h = function () {
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}

g();
f();//46

h();
f(); //1554


//EXAMPLE 2
const boardPassengers = function(n, wait){
  //const perGroup = n / 3;
  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
/*
CONSOLE:
Will start boarding in 3 seconds
We are now boarding all 180 passengers
There are 3 groups, each with 60 passengers
*/
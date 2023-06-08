// Coding Challenge #4
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
    underscore_case
     first_name
    Some_Variable
      calculate_AGE
    delayed_departure

Should produce this output (5 separate console.log outputs): 
    underscoreCase ✅
    firstName ✅
    someVariable ✅
    calculateAge ✅
    delayedDeparture ✅

Hints:
  - Remember which character defines a new line in the textarea 😉
  - The solution only needs to work for a variable made out of 2 words, like a_b
  - Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
  - This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
*/

"use strict";

//document.body.append(document.createElement('textarea'));
//document.body.append(document.createElement('button'));

document.addEventListener("DOMContentLoaded", function () {
  // Crear el elemento <textarea> y agregarlo al cuerpo del documento
  document.body.append(document.createElement("textarea"));
  // Crear el elemento <button> y agregarlo al cuerpo del documento
  const button = document.createElement("button");
  button.textContent = "Mi Botón";
  document.body.append(button);
  // Obtener una referencia al elemento <textarea>
  const textarea = document.querySelector("textarea");
  const buttonC = document.querySelector("button");

  // Agregar un evento para capturar el texto ingresado
  textarea.addEventListener("input", function () {
    const textoIngresado = textarea.value;
  });

  buttonC.addEventListener("click", function(){
    const textoIngresado = textarea.value;
    camelCaseNames(textoIngresado);
    textarea.value = '';
  });
});

//Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

function camelCaseNames(list) {
  if (list.includes("_")) {
    //lower case la palabra, remove the white spaces y separar las palabras con el split
    const lowerCaseList = list.toLowerCase().trimStart().split("_");
    //del segundo elemento del split_list poner en uppercase el primero
    const upperCasePrimeraLetra = lowerCaseList[1];
    const test = upperCasePrimeraLetra[0].toUpperCase();
    //unir la mayúscula con el resto de letras de la palabra
    const palabraUnida =
      lowerCaseList[0] + test + upperCasePrimeraLetra.slice(1) + " ✅";

    console.log(palabraUnida);
  }
}

// camelCaseNames("underscore_case");
// camelCaseNames(" first_name");
// camelCaseNames("Some_Variable");
// camelCaseNames("  calculate_AGE");
// camelCaseNames("delayed_departure");

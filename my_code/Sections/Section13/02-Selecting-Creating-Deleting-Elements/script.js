'use strict';

console.log(document.documentElement); //imprime todo el html
console.log(document.head); //imprime toda la etiqueta head del html
console.log(document.body); //imprime toda la etiqueta body del html

const header = document.querySelector('.header'); //retorna el primer elemento que encuentre con esa etiqueta
const allSections = document.querySelectorAll('.section');
console.log(allSections); // returna un NodeList que devuelve la lista de todos las sections del html, no se actualiza si el HTMl se actualiza

document.getElementById('section--1'); //devuelve el elemento con ese id
const allButtons = document.getElementsByTagName('button'); // devuele un HTML Collection con todos los buttons que encuentre en html, la colecction se actualiza cada vez que cambie el HTML
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // devuele un HTML Collection con todos los elementos que contienen esa clase

///////////////////////////////////////////////////////////////////
//CREATING AND INSERTING ELEMENTS
//.insertAdjacentHTML (ya lo usamos en las secciones anteriores)

const message = document.createElement('div'); //return un DOM element
message.classList.add('cookie-message'); //add class to it
message.textContent = 'We use cookied for improved funcionality'; //insert text
message.innerHTML =
  'We use cookied for improved funcionality <button class="btn btn--close-cookie">Got it!</button>'; //read and set context

/*
What is innerHTML in JavaScript? 
innerHTML is an HTML element property that has two uses for web developers: 
  1) You can use it to get the internal HTML content of any HTML element as an HTML string. 
  2) You can also use it to set or change elements' innerHTML content.
*/

header.prepend(message); //prepend añade el elemento "message" como el primer hijo del elemento "header"
header.append(message);//append añade el elemento "message" como el último hijo del elemento "header"

header.append(message.cloneNode(true));//insert the same elements in multiple places

//Before
header.before(message); //lo inserta antes que el "header"

//After
header.after(message); //lo inserta después que el "header"

///////////////////////////////////////////////////////////////////
//DELETING ELEMENTS
document.querySelector('.btn--close-cookie'). //se borra el elemento una vez dado un click en el botón
addEventListener('click', function(){
  message.remove();
});



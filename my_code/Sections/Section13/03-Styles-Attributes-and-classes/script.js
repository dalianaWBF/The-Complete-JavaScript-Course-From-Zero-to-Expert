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
header.append(message); //append añade el elemento "message" como el último hijo del elemento "header"

header.append(message.cloneNode(true)); //insert the same elements in multiple places

//Before
header.before(message); //lo inserta antes que el "header"

//After
header.after(message); //lo inserta después que el "header"

///////////////////////////////////////////////////////////////////
//DELETING ELEMENTS
document
  .querySelector('.btn--close-cookie') //se borra el elemento una vez dado un click en el botón
  .addEventListener('click', function () {
    message.remove();
  });

///////////////////////////////////////////////////////////////////
//STYLES ELEMENTS
message.style.backgroundColor = '#37383d'; //set syte to an element
message.style.width = '120%'; //set syte to an element

//In-line styles: (son aquellos que se crean directamente en el HTML del elemento)
//<div class="cookie-message" style="background-color: rgb(55, 56, 61); width: 120%;">We use cookied for improved funcionality <button class="btn btn--close-cookie">Got it!</button></div>

//para obtener un elemento usando la propiedad style solo se puede hacer usando las propiedades que nosotros mismos añadimos
console.log(message.style.height); //no retorna nada
console.log(message.style.backgroundColor); //rgb(55, 56, 61)

//Con este método sí podems ver todos los styles de un elementos
console.log(getComputedStyle(message).color); //rgb(187, 187, 187)

//se le cambia el ancho (height) al elemento "mensaje"
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//change the customers properties define in the root (CSV)
//se cambió el color primario de toda la pâgina a naranja
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Atributos (src, alt, class, id ...)
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Bankist logo
console.log(logo.src); //http://127.0.0.1:5500/my_code/Sections/Section13/03-Styles-Attributes-and-classes/img/logo.png
console.log(logo.className); //nav__logo

//En este caso se le agregó un atributo que no viene por defecto en el HTML a la etiqueta img:
/* 
<nav class="nav">
  <img
    src="img/logo.png"
    alt="Bankist logo"
    class="nav__logo"
    id="logo"
    designer="Jonas"
    data-version-number="3.0"
  />

  pero no podemos leer el atributo así:
  console.log(logo.designer); /undefined

  porque no es un atributo estándar de HTML
 */

//Para poder leer un atributo no estandarizado debemos usar:
console.log(logo.getAttribute('designer')); //Jonas

//SET VALORES A UN ELEMENTO
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

/*
<img src="img/logo.png" alt="Beautiful minimalist logo" class="nav__logo" id="logo" designer="Jonas" data-version-number="3.0" company="Bankist">
*/

//GET VALORES DE UN ELEMENTO
//El primero devuelve la ruta absoluta
console.log(logo.src); //http://127.0.0.1:5500/my_code/Sections/Section13/03-Styles-Attributes-and-classes/img/logo.png

//El segundo la ruta relativa
console.log(logo.getAttribute('src')); //img/logo.png


//DATA ATRRIBUTES
//debe empezar con "data-"
console.log(logo.dataset.versionNumber); //3.0


//CLASSES
logo.classList.add('clase1', 'clase2');
logo.classList.remove('clase1');
logo.classList.toggle('clase1', 'clase2'); //The toggleClass() method toggles between adding and removing one or more class names from the selected elements. This method checks each element for the specified class names. The class names are added if missing, and removed if already set - This creates a toggle effect.
logo.classList.contains('clase2');

//Don't use
logo.className = 'jonas';
//No se debe usar porque sobreescribe las clases existentes y solo deja definir una clase por elemento
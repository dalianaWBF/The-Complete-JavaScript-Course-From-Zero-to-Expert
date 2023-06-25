'use strict';

///////////////////////////////////////
// DOM Traversing

const h1 = document.querySelector('h1'); 

// Going downwards: child
console.log(h1.querySelectorAll('.highlight')); //NodeList(2) [span.highlight, span.highlight]

console.log(h1.childNodes); //NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]

console.log(h1.children); //HTMLCollection(3) [span.highlight, br, span.highlight]

h1.firstElementChild.style.color = 'white'; //la palabra 'banking' se pinta de blanco
h1.lastElementChild.style.color = 'orangered'; //la palabra 'minimalist' se pinta de naranja

// Going upwards: parents
console.log(h1.parentNode); //div.header__title
console.log(h1.parentElement); //div.header__title


h1.closest('.header').style.background = 'var(--gradient-secondary)'; //pinta todo el header de amarillo

h1.closest('h1').style.background = 'var(--gradient-primary)'; //pinta el h1 de verde

// Going sideways: siblings
console.log(h1.previousElementSibling); //no tiene un sibling previo
console.log(h1.nextElementSibling); //<h4>A simpler banking experience for a simpler life.</h4>

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

console.log(h1.parentElement.children); //Siblings
//HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]


// //reduce todos los siblings de h1 a un 50% excepto el mismo h1
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// }); 
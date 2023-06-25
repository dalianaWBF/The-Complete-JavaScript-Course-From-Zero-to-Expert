'use strict';

//Event
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e) {
  //alert('H1');
});

h1.onmouseenter = function (e) { //old version
  //alert('H1 - second option');
};

//remove the listener if we don't need it anymore
const alertH1 = function (e) { //old version
  alert('Event listener');

  //remove
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

//remove example 2
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);


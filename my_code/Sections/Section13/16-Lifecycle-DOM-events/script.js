'use strict';

///////////////////////////////////////
// Lifecycle DOM Events
//Este es cuando el HTML y el JS han sido cargados
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

//Este es cuando el HTML, el JS y el CSS han sido cargados, es decir, toda la página
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

/*
//funciona como un alert en la ventana para prevenir que el usuario recargue o cierre la página y pueda perder datos (ej: un formulario)
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
*/
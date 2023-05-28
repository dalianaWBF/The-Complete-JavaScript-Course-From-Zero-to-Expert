"use strict";

//just one class:
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');

//more than one same class:
const btnOpenModal = document.querySelectorAll('.show-modal');

//borrar una clase de un elemento
const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i=0; i<btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', openModal);
}

//añadir una clase a un elemento
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//close the modal
btnClosedModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Key pressing (keyup, keydown and keypress)
document.addEventListener('keydown', function(event){
    //console.log(event.key);
    if(event.key === 'Escape' && !modal.classList.contains ('hidden')){
        closeModal();
    }
});
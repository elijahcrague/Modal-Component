'use strict';

//selects each one of the element classes used and stores them in a variable
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//function for opening the modal by removing the hidden class for it
const openModal = function (){
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//function for closing the modal by adding the hidden class to it
const closeModal = function (){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//selects each of the buttons and assigns them eventlisteners to remove the hidden class on click
for(let i = 0; i < btnsOpenModal.length; i++){
  btnsOpenModal[i].addEventListener('click', openModal);
}

// adds the hidden class to the modal when you click the overlay or the close button thus hiding the modal
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

//adds the hidden class to the modal when you press the escape key thus hiding the modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})
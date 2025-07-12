'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const toggleHidden = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

const keyClose = function (event) {
  event.preventDefault();
  if (event.code === 'Escape' && !modal.classList.contains('hidden')) {
    toggleHidden();
  }
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', toggleHidden);
  btnsShowModal[i].addEventListener('click', function () {
    this.blur();
  });
}

btnCloseModal.addEventListener('click', toggleHidden);

overlay.addEventListener('click', toggleHidden);

document.addEventListener('keydown', keyClose);

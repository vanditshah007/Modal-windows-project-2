'use strict';
// here i am storing the variables & the Query Selector to make work Easier
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// here i am assigning the class list of add and remove here the class list so important that we need it at any cost its so useful and so important to add class list here or remove the classlist here by storing them in the function
const addingModal = function () {
  // basically the class list method does is that it adds the class whether it hidden or not it adds and remove the class from the website and its more than important to use classlist in many function
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// here is the removing class and here the class are removed when we click the cross button or the overlay means the background
const removingModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// here is the for loop for iterating over the each modal window here
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', removingModal);
// adding the function here which we already predecided up 👆👆
btnCloseModal.addEventListener('click', addingModal);

overlay.addEventListener('click', addingModal);
/* here we are adding the key down event there is 3 events in here Key down, Key Up, Click 
and in this three events key down means if the use press the key means press the key down than the function works
in the key up when the key is lifted means if the key is pressed and then lifted than the function come into the work here 
and click we already know 
here we are using the keydown function 
and in function we are also using the arguement here which is E we can obviously use any other argument but we are using this 
and in here that E will captures the key which is pressed everytime here means if the shift is pressed than it will be logged and if the enter is pressed than it will be logged in console.
here e.key means when the escape key is pressed than only goto second line 
and then we add here the other if which says that if a modal which doest not contain hidden classlist than add there hidden class list

in this way key values works here and they are pressed here in their way
*/
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
